"use client";
import { cn } from "@/lib/utils";
import { useClickOutside } from "@mantine/hooks";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useState } from "react";

const navItems = {
  "/": {
    name: "Home",
  },
  // "/about": {
  //   name: "About",
  // },
  "/blogs": {
    name: "Blog",
  },
  // "/works": {
  //   name: "Works",
  // },
  "/guestbook": {
    name: "Guestbook",
  },
};
const links = {
  Instagram: {
    link: "https://www.instagram.com/ashhhwwinnn/",
  },
  Twitter: {
    link: "https://twitter.com/70Ashrt",
  },
  Linkedin: {
    link: "https://www.linkedin.com/in/ashwin-parande-657653294/",
  },
  Github: {
    link: "https://github.com/Ashpara10",
  },
};
const Header = () => {
  const uniqueId = useId();
  let pathname = usePathname() || "/";
  if (pathname.includes("/blogs/")) {
    pathname = "/blogs";
  }
  const { theme, setTheme } = useTheme();
  const ref = useClickOutside(() => {
    setShow(false);
  });

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  const [show, setShow] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 bg-transparent w-full flex items-center justify-center z-20 backdrop-blur-md">
      <nav className=" mx-2 px-2 overflow-hidden bg-transparent  py-2.5  max-w-2xl  w-full flex items-center justify-end">
        <MotionConfig
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.3,
          }}
        >
          <div className="flex z-30 items-center justify-center gap-x-2">
            {hasMounted && (
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={cn(
                  "p-2  rounded-xl focus-visible:outline-none text-sm ",
                  theme === "dark" ? "bg-orange-300" : "bg-purple-600"
                )}
              >
                {theme === "dark" ? (
                  <Sun className="text-sm stroke-black" />
                ) : (
                  <Moon className="text-sm stroke-white" />
                )}
              </motion.button>
            )}

            <motion.button
              layoutId={`popover-menu-${uniqueId}`}
              onClick={() => setShow(true)}
              className=" focus-within:outline-none border dark:border-dark-border border-neutral-300 dark:bg-dark-bg bg-white p-2 rounded-xl"
            >
              <Menu className="size-6 opacity-80" />
            </motion.button>
          </div>
          <AnimatePresence>
            {show && (
              <motion.div
                ref={ref}
                layoutId={`popover-menu-${uniqueId}`}
                className="drop-shadow-2xl shadow-black z-30 dark:bg-dark-bg bg-white overflow-hidden rounded-3xl w-52 py-3  border border-gray-200/70 dark:border-dark-border fixed top-16 "
              >
                {Object.entries(navItems).map(([path, { name }]) => {
                  return (
                    <motion.div
                      className="text-md px-4 flex items-center justify-start gap-x-0.5 w-full first:border-none border-t border-gray-200/70 cursor-pointer dark:border-dark-border py-2 focus:dark:bg-border"
                      key={path}
                      onClick={() => router.push(path)}
                    >
                      {name}
                    </motion.div>
                  );
                })}

                {Object.entries(links).map(([name, { link }]) => {
                  return (
                    <Link key={name} href={link} target="_blank">
                      <motion.div className="text-md px-4  cursor-pointerfirst:border-none border-t flex items-center justify-start gap-x-0.5 border-gray-200/70 dark:border-dark-border py-1.5 focus:dark:bg-border">
                        {name}
                      </motion.div>
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </MotionConfig>
      </nav>
    </header>
  );
};

export default Header;