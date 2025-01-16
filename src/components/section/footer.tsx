import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full text-sm md:text-base mt-4 flex flex-col dark:opacity-90 opacity-80">
      <span className="mt-4">
        I’m open to exploring new opportunities, collaborating on exciting
        projects, or simply connecting. Feel free to reach out via{" "}
        <Link
          className="text-blue-700 opacity-100 dark:text-blue-500"
          target="_blank"
          href={"mailto:ashwinparande1156610c@gmail.com"}
        >
          Email↗
        </Link>
        , follow me on{" "}
        <Link
          className="text-blue-700 opacity-100 dark:text-blue-500"
          target="_blank"
          href={"https://x.com/70Ashrt"}
        >
          {" "}
          Twitter↗
        </Link>
        , or explore my work on{" "}
        <Link
          className="text-blue-700 opacity-100 dark:text-blue-500"
          target="_blank"
          href={"https://github.com/Ashpara10"}
        >
          GitHub↗
        </Link>
        .
      </span>
    </div>
  );
};

export default Footer;
