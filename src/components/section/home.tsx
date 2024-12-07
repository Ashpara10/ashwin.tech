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
          {/* <Image
            src={"/circle.png"}
            className="size-12 aspect-square rounded-full border border-gray-300 dark:border-dark-border"
            alt="pfp"
            style={{ objectFit: "cover" }}
            width={46}
            height={46}
            quality={100}
          /> */}
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
        {/* <span className="my-2 w-full leading-tight opacity-80 ">
          Crafting powerful and interactive{" "}
          <b className="font-semibold ">web experiences</b>. Currently a
          sophomore pursuing my bachelor&apos;s degree in Computer Applications.
        </span> */}
        <div className="opacity-80 flex flex-col ">
          <span>
            I am a frontend engineer passionate about crafting meaningful
            digital experiences that seamlessly combine design and technology.
          </span>
          <span className="mt-6">
            Developing skills through hands-on projects, exploring my interests
            with intention,Currently a sophomore pursuing my bachelor&apos;s
            degree in Computer Applications..
          </span>
        </div>

        {/* <div className="mt-4">
          <a href="https://skillicons.dev" className="flex flex-col gap-2">
            <img src="https://skillicons.dev/icons?i=javascript,typescript,react,nextjs,nodejs,prisma,css,golang,git,github" />
            <img src="https://skillicons.dev/icons?i=bash,express,vercel,mysql,c,docker,mongodb,supabase,firebase,tailwindcss" />
          </a>
        </div> */}
      </motion.div>
      <div className="w-full gap-2 flex flex-wrap  mt-4 items-center justify-start">
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
