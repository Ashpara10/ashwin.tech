"use client";
import { BlogType } from "@/lib/actions";
import { motion } from "framer-motion";
import { FC } from "react";
import BlogCard from "../blog-card";

const BlogSection: FC<{ blogs: BlogType[] }> = ({ blogs }) => {
  return (
    <motion.div className="block max-w-2xl w-full mt-6">
      <div className="">
        <h3 className="text-xl font-semibold tracking-tight ">Blogs</h3>
      </div>
      <div className="grid grid-cols-1  gap-2 mt-2">
        {blogs.slice(0, 4).map((data, i) => {
          return <BlogCard key={i} {...data} />;
        })}
      </div>
    </motion.div>
  );
};

export default BlogSection;
