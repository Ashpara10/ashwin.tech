"use client";
import { allProjects } from "content-collections";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <motion.div id="projects" className=" w-full  flex flex-col   mt-12">
      <motion.div className="flex flex-col items-start justify-center ">
        <h2 className="w-full  text-left text-2xl font-medium ">Projects</h2>
      </motion.div>
      <motion.div className="mt-3">
        {allProjects?.map((data, i) => {
          return (
            <Link href={`/projects/${data.slug}`} key={i}>
              <motion.div
                key={i}
                className="flex w-full bg-neutral-100 dark:bg-neutral-700  rounded-xl border border-neutral-200 dark:border-neutral-600 px-2 py-3"
              >
                <Image
                  width={50}
                  height={50}
                  className="aspect-square size-10"
                  src={data.icon!}
                  alt={data.title}
                />
                <div className="flex ml-4 flex-col">
                  <h2 className="font-medium tracking-tight leading-tight">
                    {data.title}
                  </h2>
                  <p className="opacity-80 text-sm leading-tight">
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
