"use client";
import { allProjects } from "content-collections";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <motion.div
      id="projects"
      className=" w-full max-w-2xl mx-auto font-aspekta  flex flex-col   mt-12"
    >
      <motion.div className="flex flex-col items-start justify-center ">
        <h2 className="w-full text-left text-lg tracking-tight font-medium font-inter">
          Projects
        </h2>
      </motion.div>
      <motion.div className="mt-3 flex flex-col space-y-3 ">
        {allProjects?.map((data, i) => {
          return (
            <Link href={data?.url as string} target="_blank" key={i}>
              <motion.div
                key={i}
                className="flex w-full bg-amber-50 dark:bg-neutral-800 border border-neutral-200  dark:border-dark-bg_soft p-3 hover:bg-amber-100 transition-all duration-300 dark:hover:bg-border"
              >
                <Image
                  width={50}
                  height={50}
                  className="aspect-square rounded-md border border-neutral-300 dark:border-dark-bg_soft size-12"
                  src={data.icon!}
                  alt={data.title}
                />
                <div className="flex ml-4 mt-1 flex-col items-start justify-start">
                  <h2 className="font-medium tracking-tight leading-tight ">
                    {data.title}
                  </h2>
                  <p className="text-neutral-600 font-medium dark:text-neutral-300 text-sm leading-tight">
                    {data.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
