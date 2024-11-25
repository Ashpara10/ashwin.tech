"use client";
import { motion } from "framer-motion";
import { CornerRightUp } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const HomeSection = () => {
  const socialLinks = [
    { name: "Github", link: "https://github.com/Ashpara10/" },
    { name: "Twitter", link: "https://x.com/70Ashrt" },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/ashwin-parande-657653294/",
    },
  ];
  const { theme } = useTheme();
  return (
    <motion.div id="home" className="max-w-2xl w-full  flex flex-col  ">
      <motion.div className="w-full flex items-center justify-between">
        <div className="w-full flex items-center justify-center">
          <Image
            src={"/circle.png"}
            className="size-12 aspect-square rounded-full border border-gray-300 dark:border-dark-border"
            alt="pfp"
            style={{ objectFit: "cover" }}
            width={46}
            height={46}
            quality={100}
          />

          <div className="w-full ml-3 flex flex-col items-start justify-center">
            <div className="w-full flex items-center justify-between">
              <span className=" text-left text-lg md:text-xl font-semibold tracking-tighter">
                {" "}
                Ashwin Parande 🌻🌊
              </span>
            </div>
            <span className="text-left opacity-80 leading-tight">
              Frontend web developer
            </span>
          </div>
        </div>
      </motion.div>
      <motion.div className="flex flex-col items-start justify-center mt-6">
        <span className="text-xl  tracking-tight font-medium ">Bio</span>
        <span className="my-2 w-full leading-snug opacity-80 md:text-base text-sm">
          Crafting powerful and interactive{" "}
          <b className="font-medium ">web experiences</b>. Currently a sophomore
          pursuing my bachelor's degree in Computer Applications.
        </span>
        <div className="w-full gap-2 flex flex-wrap mt-2 items-center justify-start">
          <Link
            target="_blank"
            className="rounded-3xl flex group items-center justify-center text-sm dark:bg-neutral-900 bg-neutral-200 px-4 py-1 dark:text-white text-black"
            href={"/resume-latest.pdf"}
          >
            <button className="text-sm dark:opacity-70  ">Resume</button>
            <CornerRightUp className="size-3 opacity-80 transition-all duration-100 ml-2  " />
          </Link>

          {socialLinks.map((link, i) => {
            return (
              <Link
                target="_blank"
                className="rounded-3xl flex group items-center justify-center text-sm dark:bg-neutral-900 bg-neutral-200 px-4 py-1 dark:text-white text-black"
                key={i}
                href={link?.link}
              >
                <button className="text-sm dark:opacity-70 ">
                  {link.name}
                </button>
                <CornerRightUp className="size-3 opacity-80 transition-all duration-100 ml-2  " />
              </Link>
            );
          })}
        </div>
      </motion.div>
      {/* <div className="rounded-xl overflow-hidden mt-4">
        {theme === "dark" ? (
          <Image
            src={"/p3.png"}
            width={600}
            height={600}
            className="aspect-square rounded-lg w-full object-cover bg-top"
            alt=""
          />
        ) : (
          <Image
            src={"/p4.png"}
            width={600}
            height={600}
            className="aspect-square rounded-lg w-full object-cover bg-top"
            alt=""
          />
        )}
      </div> */}
    </motion.div>
  );
};

export default HomeSection;
