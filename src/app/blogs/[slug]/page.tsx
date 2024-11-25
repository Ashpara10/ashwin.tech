import BlogPage from "@/components/blog-page";
import { getBlogBySlug } from "@/lib/actions";
import { Metadata } from "next";
import { FC } from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = (await params).slug as string;
  // @ts-ignore
  const blog = await getBlogBySlug(slug);
  console.log(blog);
  return {
    title: `${blog.frontmatter.title} | Ashwin Parande`,
    description: blog.frontmatter.description as string,
  };
}

const Page: FC<PageProps> = async ({ params }) => {
  const slug = (await params).slug as string;
  const blog = await getBlogBySlug(slug);

  return (
    <div className="w-full flex flex-col px-3 items-center justify-center min-h-screen">
      {/* @ts-ignore */}
      <BlogPage data={blog as any} />
    </div>
  );
};

export default Page;
