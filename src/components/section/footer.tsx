import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-base max-w-xl mx-auto">
      <p className="mt-4 text-neutral-700 dark:text-neutral-400">
        I’m open to exploring new opportunities, collaborating on exciting
        projects, or simply connecting. Feel free to reach out via{" "}
        <Link
          className="text-sky-700 opacity-100 dark:text-sky-500"
          target="_blank"
          href={"mailto:ashwinparande1156610c@gmail.com"}
        >
          Email↗
        </Link>
        , follow me on{" "}
        <Link
          className="text-sky-700 opacity-100 dark:text-sky-500"
          target="_blank"
          href={"https://x.com/70Ashrt"}
        >
          {" "}
          Twitter↗
        </Link>
        , or explore my work on{" "}
        <Link
          className="text-sky-700 opacity-100 dark:text-sky-500"
          target="_blank"
          href={"https://github.com/Ashpara10"}
        >
          GitHub↗
        </Link>
        .
      </p>
    </div>
  );
};

export default Footer;
