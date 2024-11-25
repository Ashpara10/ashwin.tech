"use server";

import { readdirSync, readFileSync } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

export type BlogType = {
  metadata: {
    fileName: string;
    fileContent: string;
  };
  source: {
    compiledSource: string;
    frontmatter: {
      title: string;
      createdAt: string;
      description: string;
      icon: string;
    };
    source: any;
  };
};

export const getBlogs = async () => {
  const path = join(process.cwd(), "content", "blogs");
  const files = readdirSync(path);
  const posts = files.map((fileName) => {
    const filePath = join(path, fileName);
    const fileContent = readFileSync(filePath, "utf8");
    return { fileName, fileContent };
  });

  const mdxSources = await Promise.all(
    posts.map(async (post) => {
      const data = await serialize(post.fileContent, {
        parseFrontmatter: true,

        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeCodeTitles, rehypePrettyCode, rehypePrism],
          format: "mdx",
        },
      });
      return {
        metadata: post,
        source: data,
      };
    })
  );
  return mdxSources;
};

export const getBlogBySlug = async (slug: string) => {
  const path = join(process.cwd(), "content", "blogs", `${slug}.mdx`);
  const data = readFileSync(path, "utf-8");
  const mdxSource = await serialize(data, {
    parseFrontmatter: true,

    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeCodeTitles, rehypePrettyCode, rehypePrism],
      format: "mdx",
    },
  });
  return mdxSource;
};
