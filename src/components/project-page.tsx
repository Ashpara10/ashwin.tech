"use client";
import { MDXContent } from "@content-collections/mdx/react";
import { Project } from "content-collections";
import { Link } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";
import { FC } from "react";
import { MdxComponent } from "./mdx-components";
import { Button } from "./ui/button";

const ProjectPage: FC<{ data: Project }> = ({ data }) => {
  return (
    <article className="w-full max-w-2xl flex flex-col  pb-10 items-center justify-center">
      <div className="w-full flex items-center justify-between mb-2">
        <div className="flex items-center justify-center">
          <Image
            width={60}
            height={60}
            className="aspect-square rounded-xl  size-12"
            src={data.icon!}
            alt={data.title}
          />
          <div className="flex ml-4 flex-col">
            <h2 className="tracking-tight leading-tight w-full text-left font-medium text-xl">
              {data?.title}
            </h2>
            <p className="w-full opacity-80 text-left font-normal">
              {data?.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <NextLink href={data?.url!} target="_blank">
            <Button size={"smallIcon"}>
              <Link className="opacity-80 size-4" />
            </Button>
          </NextLink>
        </div>
      </div>
      {/* <div className="w-full opacity-75 text-sm flex items-center justify-start mb-3">
        <span className=" ">
          {new Date(data?.createdAt).toLocaleString("en", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}{" "}
        </span>
        <Dot />
        <span>{data?.readingTime}</span>
      </div> */}
      <div className="w-full flex mb-6 flex-wrap gap-2 mt-2">
        {data?.tags?.map((tag, i) => {
          return (
            <span
              key={i}
              className="text-sm text-opacity-80 bg-gray-200 dark:bg-neutral-700 px-3 py-1 rounded-lg"
            >
              {tag}
            </span>
          );
        })}
      </div>
      {/* @ts-ignore   */}
      <MDXContent code={data?.mdxSource} components={MdxComponent} />
    </article>
  );
};

export default ProjectPage;
