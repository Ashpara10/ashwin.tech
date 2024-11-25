import BlogPage from "@/components/blog-page";
import { getBlogBySlug } from "@/lib/actions";
import { Metadata, ResolvingMetadata } from "next";
import React, { FC } from "react";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = (await getBlogBySlug(params.slug)) as any;
  console.log(blog);
  return {
    title: `${blog.frontmatter.title} | Ashwin Parande`,
    description: blog.frontmatter.description,
  };
}

const Page: FC<PageProps> = async ({ params: { slug } }) => {
  const blog = await getBlogBySlug(slug);

  return (
    <div className="w-full flex flex-col px-3 items-center justify-center min-h-screen">
      <BlogPage data={blog as any} />
    </div>
  );
};

export default Page;
