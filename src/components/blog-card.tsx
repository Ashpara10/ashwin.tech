import { BlogType } from "@/lib/actions";
import { Dot } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
import readingTime from "reading-time";

const BlogCard: FC<BlogType> = ({ source, metadata }) => {
  return (
    <Link
      href={`/blogs/${metadata?.fileName.split(".")[0]}`}
      key={metadata?.fileName}
      className="cursor-pointer  p-1 group rounded-lg  transition-colors duration-300"
    >
      <h2 className=" leading-tight tracking-tight hover:underline">
        {source?.frontmatter.title}
      </h2>

      <div className="w-full opacity-75 text-sm flex items-center justify-start ">
        <span className=" ">
          {new Date(source?.frontmatter?.createdAt).toLocaleString("en", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}{" "}
        </span>
        <Dot />
        <span>{readingTime(source?.compiledSource?.trim())?.text}</span>
      </div>
      {/* </div> */}
    </Link>
  );
};

export default BlogCard;
