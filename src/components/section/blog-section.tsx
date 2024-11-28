"use client";
import { allPosts } from "content-collections";
import { motion } from "framer-motion";
import { FC } from "react";
import BlogCard from "../blog-card";

const BlogSection: FC = () => {
  return (
    <motion.div className="block max-w-2xl w-full mt-6">
      <div className="">
        <h3 className="text-xl  tracking-tight font-medium ">Writings</h3>
      </div>
      <div className="grid grid-cols-1  gap-2 mt-2">
        {allPosts
          .sort(
            (a, b) =>
              new Date(b?.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .slice(0, 4)
          .map((data, i) => {
            return <BlogCard key={i} {...data} />;
          })}
      </div>
    </motion.div>
  );
};

export default BlogSection;
