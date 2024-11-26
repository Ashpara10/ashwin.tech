import BlogCard from "@/components/blog-card";
import { getBlogs } from "@/lib/actions";

export default async function Blogs() {
  const mdxSource = await getBlogs();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section className="max-w-2xl gap-y-3 w-full flex flex-col ">
        {mdxSource
          .sort(
            (a, b) =>
              new Date(b?.source?.frontmatter?.createdAt as string).getTime() -
              new Date(a?.source?.frontmatter?.createdAt as string).getTime()
          )
          .map(({ metadata, source }) => {
            return (
              <BlogCard
                key={metadata?.fileName}
                metadata={metadata}
                // @ts-ignore
                source={source as any}
              />
            );
          })}
      </section>
    </div>
  );
}
