import { getSlug } from "@/lib/utils";
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import readingTime from "reading-time";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

const posts = defineCollection({
  name: "posts",
  directory: "/content/posts",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string().min(6),
    description: z.string(),
    createdAt: z.string(),
    tags: z.string().array().nullable(),
    words: z.number().default(() => 0),
    readingTime: z.string().default(() => "0 min read"),
  }),
  transform: async (document, content) => {
    const slug = document?._meta.filePath.replace(".mdx", "");
    console.log(slug);
    const docs = await content?.collection.documents();
    const mdxSource = await compileMDX(content, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeCodeTitles, rehypePrettyCode, rehypePrism],
    });
    const idx = docs.findIndex(
      (d) => document._meta.filePath === d._meta.filePath
    );
    return {
      ...document,
      mdxSource,
      words: document?.content.split(" ").length,
      slug: getSlug(document.title),
      createdAt: new Date(document.createdAt).toLocaleString("en", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      }),
      readingTime: readingTime(document?.content).text,
      prev: idx > 0 ? docs[idx - 1] : null,
      next: idx < docs.length - 1 ? docs[idx + 1] : null,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
