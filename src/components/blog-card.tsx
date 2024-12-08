import { Post } from "content-collections";
import { Dot } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const BlogCard: FC<Post> = (data) => {
  return (
    <Link
      href={`/blogs/${data?.slug}`}
      key={data?.slug}
      className="cursor-pointer hover:dark:bg-dark-border/30 w-full px-1 flex items-center justify-between group rounded-lg  transition-colors duration-300"
    >
      <h2 className="w-3/4 truncate text-sm md:text-base leading-tight tracking-tight hover:underline">
        {data?.title}
      </h2>

      <div className="ml-3 w-fit opacity-75 text-sm flex items-center justify-start ">
        <span>{data?.readingTime}</span>
      </div>
    </Link>
  );
};

export default BlogCard;
