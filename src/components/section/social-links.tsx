import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <section className="w-full max-w-2xl mx-auto ">
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
  let icon: string;
  const isResume = name === "Resume";
  switch (name) {
    case "Github":
      icon = "github.svg";
      break;
    case "Twitter":
      icon = "twitter.png";
      break;
    case "Linkedin":
      icon = "linkedin.svg";
      break;
    default:
      icon = "github.svg";
      break;
  }

  return (
    <button className="px-4 py-2  border border-neutral-300 rounded-3xl bg-white dark:bg-dark-bg dark:border-dark-bg_soft  flex items-center justify-center">
      {isResume ? (
        <div className="ml-1 flex items-center justify-center">
          <Link2
            strokeWidth={2}
            className="size-4 stroke-neutral-800 dark:stroke-neutral-200"
          />
        </div>
      ) : (
        <Image
          className="inline-block "
          width={20}
          height={20}
          alt={`${name} icon`}
          src={`/${icon}`}
        />
      )}
      <span className="text-sm  ml-2 dark:text-neutral-200 text-neutral-900 font-medium ">
        {name}
      </span>
    </button>
  );
};

export default SocialLinks;
