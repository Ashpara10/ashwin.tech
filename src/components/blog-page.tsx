"use client";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import React, { FC } from "react";
import { MdxComponent } from "./mdx-components";
import readingTime from "reading-time";
import { Dot } from "lucide-react";
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
    scope: {};
  };
};

const BlogPage: FC<{ data: BlogPageProps["source"] }> = ({ data }) => {
  return (
    <article className="w-full max-w-xl flex flex-col  pb-10 items-center justify-center">
      <h2 className="tracking-tight  w-full text-left font-medium text-xl">
        {data?.frontmatter?.title}
      </h2>
      <div className="w-full opacity-75 text-sm flex items-center justify-start mb-4">
        <span className=" ">
          {new Date(data?.frontmatter?.createdAt).toLocaleString("en", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}{" "}
        </span>
        <Dot />
        <span>{readingTime(data?.compiledSource?.trim())?.text}</span>
      </div>
      <MDXRemote lazy {...data} components={MdxComponent} />
    </article>
  );
};

export default BlogPage;
