import ProjectPage from "@/components/project-page";
// import { getBlogBySlug } from "@/lib/actions";
import { allProjects } from "content-collections";
import { Metadata } from "next";
import { FC } from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const getBlogBySlug = async (slug: string) => {
  return allProjects.find((post) => post.slug === slug);
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = (await params).slug as string;
  // @ts-ignore
  const blog = await getBlogBySlug(slug);
  // console.log(blog);
  return {
    title: `${blog?.title} | Ashwin Parande`,
    description: blog?.description as string,
  };
}

const Page: FC<PageProps> = async ({ params }) => {
  const slug = (await params).slug as string;
  const blog = await getBlogBySlug(slug);

  return (
    <div className="w-full flex flex-col px-3 items-center justify-start min-h-screen">
      {/* @ts-ignore */}
      <ProjectPage data={blog} />
    </div>
  );
};

export default Page;
