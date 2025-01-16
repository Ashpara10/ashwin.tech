"use client";
import { Dot } from "lucide-react";
import { MDXContent } from "@content-collections/mdx/react";
import { FC } from "react";
import readingTime from "reading-time";
import { MdxComponent } from "./mdx-components";
import { Post } from "content-collections";
import ViewCount from "./views";

type BlogPageProps = {
  metadata: {
    fileName: string;
    fileContent: string;
  };
  source: {
    compiledSource: string;
    frontmatter: {
      title: string;
      image: string;
      createdAt: string;
      description: string;
      icon: string;
    };
    scope: any;
  };
};

const BlogPage: FC<{ data: Post }> = ({ data }) => {
  return (
    <article className="w-full max-w-2xl flex flex-col  pb-10 items-center justify-center">
      <h2 className="tracking-tight  w-full text-left font-medium text-xl">
        {data?.title}
      </h2>
      <div className="w-full opacity-75 text-sm flex items-center justify-start mb-4">
        <span className=" ">
          {new Date(data?.createdAt).toLocaleString("en", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}{" "}
        </span>
        <Dot />
        <span>{data?.readingTime}</span>
        <ViewCount slug={data?.slug} />
      </div>
      {/* @ts-ignore   */}
      <MDXContent code={data?.mdxSource} components={MdxComponent} />
    </article>
  );
};

export default BlogPage;
