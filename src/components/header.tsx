"use client";
import { cn } from "@/lib/utils";
import { useClickOutside, useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = {
  "/": {
    name: "Home",
  },
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
  let pathname = usePathname() || "/";
  if (pathname.includes("/blogs/")) {
    pathname = "/blogs";
  }
  const { theme, setTheme } = useTheme();

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const [show, setShow] = useState(false);
  const router = useRouter();
  const ref = useClickOutside(() => {
    setShow(false);
  });
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  // <header className="fixed bottom-0 bg-transparent w-full flex items-center justify-center z-20 ">
  {
    /* <nav className=" mx-2 px-2 overflow-hidden bg-transparent  py-2.5  max-w-2xl  w-full flex items-center justify-end">
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
              onClick={() => {
                if (!document.startViewTransition()) toggleTheme();
                document.startViewTransition(toggleTheme);
              }}
              className={cn(
                "p-2  rounded-xl focus-visible:outline-none text-sm ",
                theme === "dark" ? "bg-orange-300" : "bg-purple-600"
              )}
            >
              {theme === "dark" ? (
                <Sun className="text-sm stroke-orange-950" />
              ) : (
                <Moon className="text-sm stroke-purple-100" />
              )}
            </motion.button>
          )}

          <MotionButton
            layoutId={`popover-menu-${uniqueId}`}
            onClick={() => setShow(true)}
            className=" focus-within:outline-none border dark:border-neutral-700 border-neutral-300/80 dark:bg-neutral-800 bg-white p-2 rounded-xl"
          >
            <Menu className="size-6 opacity-80" />
          </MotionButton>
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
    </nav> */
  }

  const icons = [
    {
      name: "Home",
      onClick: () => {
        router.push("/");
      },
      icon: (
        <svg
          className="size-6"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 17H16M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Guestbook",

      onClick: () => {
        router.push("/guestbook");
      },
      icon: (
        <svg
          className="size-6"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21L11.8999 20.8499C11.2053 19.808 10.858 19.287 10.3991 18.9098C9.99286 18.5759 9.52476 18.3254 9.02161 18.1726C8.45325 18 7.82711 18 6.57482 18H5.2C4.07989 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V6.2C2 5.07989 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.07989 3 5.2 3H5.6C7.84021 3 8.96031 3 9.81596 3.43597C10.5686 3.81947 11.1805 4.43139 11.564 5.18404C12 6.03968 12 7.15979 12 9.4M12 21V9.4M12 21L12.1001 20.8499C12.7947 19.808 13.142 19.287 13.6009 18.9098C14.0071 18.5759 14.4752 18.3254 14.9784 18.1726C15.5467 18 16.1729 18 17.4252 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V6.2C22 5.07989 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H18.4C16.1598 3 15.0397 3 14.184 3.43597C13.4314 3.81947 12.8195 4.43139 12.436 5.18404C12 6.03968 12 7.15979 12 9.4"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Switch Theme",
      onClick: () => {
        if (!document.startViewTransition()) toggleTheme();
        document.startViewTransition(toggleTheme);
      },
      icon:
        theme === "dark" ? (
          <svg
            className="size-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="size-6"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9548 12.9564C20.5779 15.3717 17.9791 17.0001 15 17.0001C10.5817 17.0001 7 13.4184 7 9.00008C7 6.02072 8.62867 3.42175 11.0443 2.04492C5.96975 2.52607 2 6.79936 2 11.9998C2 17.5227 6.47715 21.9998 12 21.9998C17.2002 21.9998 21.4733 18.0305 21.9548 12.9564Z"
              strokeWidth={1.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
    },
  ];
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <header
      className={cn(
        "fixed bottom-6 inset-x-2 md:inset-x-0 max-w-4xl  mx-auto  w-full flex items-center justify-start z-50 ",
        !isDesktop && "bottom-4 "
      )}
    >
      <motion.div
        ref={ref}
        initial={{
          width: "3.5rem",
          height: "3.5rem",
        }}
        animate={
          isDesktop
            ? {
                height: show ? "180px" : "3.5rem",
              }
            : {
                width: show ? "180px" : "3.5rem",
              }
        }
        layout
        transition={{
          type: "spring",
          bounce: 0.05,
          duration: 0.3,
        }}
        className={cn(
          "border border-amber-200/80  dark:shadow-2xl dark:shadow-black/80 rounded-full  dark:border-dark-bg_soft  bg-amber-100 flex items-center justify-center dark:bg-neutral-800"
        )}
        onClick={() => setShow(true)}
      >
        {show ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
            }}
            className={cn("flex flex-col ", !isDesktop && "flex-row")}
          >
            {icons.map(({ name, icon, onClick }) => {
              return (
                <motion.div
                  key={name}
                  onClick={onClick}
                  className={cn(
                    "text-md p-4 flex items-center justify-start gap-x-0.5 w-full first:border-none  border-amber-200/80 cursor-pointer dark:border-dark-border",
                    isDesktop ? "border-t" : "border-l"
                  )}
                >
                  <span className="size-6 stroke-amber-900 dark:stroke-neutral-200">
                    {icon}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <Menu className="size-7 stroke-amber-900 dark:stroke-neutral-200" />
        )}
      </motion.div>
    </header>
  );
};

export default Header;
