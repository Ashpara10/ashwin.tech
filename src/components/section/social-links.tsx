import { Github, Link2, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const SocialLinks = () => {
  const socialLinks = [
    { name: "Twitter", link: "https://x.com/70Ashrt" },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/ashwin-parande-657653294/",
    },
    { name: "Github", link: "https://github.com/Ashpara10/" },
    { name: "Resume", link: "https://dub.sh/resume2025" },
  ];

  return (
    <section className="w-full max-w-xl mx-auto ">
      <div className="w-full gap-2 text-sm flex flex-wrap  mt-4 items-center justify-start">
        {socialLinks.map((link, i) => {
          return (
            <Link key={i} href={link?.link} target="_blank">
              <SocialLink name={link?.name} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

const SocialLink = ({ name }: { name: string }) => {
  let icon: ReactNode;

  return (
    <button className="px-5 bg-white rounded-3xl py-2 dark:bg-neutral-800  flex items-center justify-center">
      <span className="font-inter text-sm tracking-normal dark:text-white text-neutral-900 font-medium ">
        {name}
      </span>
    </button>
  );
};

export default SocialLinks;
