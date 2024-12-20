"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const HomeSection = () => {
  const socialLinks = [
    { name: "Github", link: "https://github.com/Ashpara10/" },
    { name: "Resume", link: "/resume-latest.pdf" },
    { name: "Twitter", link: "https://x.com/70Ashrt" },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/ashwin-parande-657653294/",
    },
  ];
  return (
    <motion.div id="home" className="max-w-xl w-full  flex flex-col  ">
      <motion.div className="w-full flex items-center justify-between">
        <div className="w-full flex items-center justify-center">
          <div className="size-12 rounded-full aspect-square bg-gradient-to-tr from-sky-200 via-blue-500 to-sky-800" />

          <div className="w-full ml-3 flex flex-col items-start justify-center">
            <div className="w-full flex items-center justify-between">
              <span className=" text-left  font-medium tracking-tighter">
                {" "}
                Ashwin Parande 🌻🌊
              </span>
            </div>
            <span className="text-left opacity-75 leading-tight">
              Frontend web developer
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div className="flex flex-col items-start justify-center mt-6">
        <span className="text-lg tracking-tight font-medium ">Bio</span>
        <div className="dark:opacity-90 opacity-80 text-sm md:text-base flex flex-col ">
          <span>
            I am a frontend developer driven by a passion for building impactful
            digital experiences that blend design and technology.
          </span>
          <span className="mt-6">
            Developing skills through hands-on projects, exploring my interests
            with intention,Currently a sophomore pursuing my bachelor&apos;s
            degree in Computer Applications..
          </span>
        </div>
      </motion.div>
      <div className="w-full gap-2 text-sm md:text-base flex flex-wrap  mt-4 items-center justify-start">
        {socialLinks.map((link, i) => {
          return (
            <Link
              target="_blank"
              className="hover:underline text-blue-700 dark:text-blue-500"
              key={i}
              href={link?.link}
            >
              <button className="flex  items-center justify-center ">
                {link.name}
                <ArrowUpRight className="size-4 opacity-80 transition-all duration-100 ml-2  " />
              </button>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default HomeSection;
