"use client";
import { allPosts } from "content-collections";
import { motion, Variants } from "framer-motion";
import { FC } from "react";
import BlogCard from "../blog-card";

const container: Variants = {
  hidden: {},
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0.1, y: 100 },
  show: { opacity: 1, y: 0 },
};

const BlogSection: FC = () => {
  return (
    <motion.div variants={item} className="block w-full mt-6">
      <div className="">
        <h3 className="text-2xl  tracking-tight font-medium ">Writings</h3>
      </div>
      <div className="grid grid-cols-1 mt-2 gap-2">
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
