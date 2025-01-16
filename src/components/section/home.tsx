"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const HomeSection = () => {
  const socialLinks = [
    { name: "Github", link: "https://github.com/Ashpara10/" },
    { name: "Resume", link: "https://dub.sh/resume2025" },
    { name: "Twitter", link: "https://x.com/70Ashrt" },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/ashwin-parande-657653294/",
    },
  ];

  const images = ["me1.jpg", "me2.jpg", "me4.jpg", "me3.jpg"];

  return (
    <motion.div id="home" className="w-full  flex flex-col  ">
      <motion.div className="w-full flex items-center justify-start">
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex flex-col items-start justify-center">
            <div className="w-full flex items-center justify-between">
              <span className="font-serif text-left text-3xl md:text-5xl  font-medium tracking-tight">
                {" "}
                Ashwin Parande🌻🌊
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="w-full flex flex-col items-start justify-center mt-6">
        <div className="dark:opacity-90 gap-y-2 opacity-80 text-sm md:text-base leading-tight  flex flex-col ">
          <span>
            I am web developer based in India with an innate passion and
            curiosity for art, programming and all things tech.
          </span>

          <span className="mt-3">
            I like to read articles (sometimes) and watch movies and play
            football. I also write sometimes. You can reach me at
            <Link
              className="text-blue-700 mx-2 opacity-100 dark:text-blue-500"
              target="_blank"
              href={"mailto:ashwinparande1156610c@gmail.com"}
            >
              ashwinparande1156610c@gmail.com
            </Link>{" "}
          </span>
        </div>
      </motion.div>
      <div className="w-full gap-2 text-sm md:text-base flex flex-wrap  mt-4 items-center justify-start">
        {socialLinks.map((link, i) => {
          return (
            <Link key={i} href={link?.link} target="_blank">
              <SocialLink name={link?.name} />
            </Link>
          );
        })}
      </div>
      <LargeImageContainer images={images} />
      <SmallImageContainer images={images} />
    </motion.div>
  );
};

const SocialLink = ({ name }: { name: string }) => {
  let icon: string;

  switch (name) {
    case "Github":
      icon = "github.svg";
      break;
    case "Resume":
      icon = "globe.svg";
      break;
    case "Twitter":
      icon = "x.svg";
      break;
    case "Linkedin":
      icon = "linkedin.svg";
      break;
    default:
      icon = "github.svg";
      break;
  }

  return (
    <Button size={"sm"}>
      <Image
        src={`/${icon}`}
        className="aspect-square size-5"
        alt={name}
        width={20}
        height={20}
      />
      <span className="ml-2 opacity-90 text-black dark:text-white tracking-tight leading-snug mr-2 ">
        {name}
      </span>
    </Button>
  );
};

const LargeImageContainer = ({
  images,
}: // imagesContainerVariants
{
  images: string[];
  // imagesContainerVariants: Variants;
}) => {
  const imagesContainerVariants: Variants = {
    hidden: {
      // opacity: 0,
      spacing: -100,
    },
    visible: {
      // opacity: 1,
      spacing: -2,
      transition: {
        staggerChildren: 0.1, // Adjust the stagger duration as needed
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 50, rotate: 0 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      rotate: i % 2 == 0 ? 6 : -6,
      transition: {
        duration: 0.25,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
  };
  return (
    <motion.div className="w-full relative  hidden md:flex items-center justify-center mt-10">
      <motion.div
        variants={imagesContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center gap-2 -space-x-8"
      >
        {images.map((image, i) => {
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              custom={i}
              whileHover={{
                scale: 1.08,
                zIndex: 2,
              }}
              className=" cursor-pointer"
            >
              <Image
                style={{
                  objectFit: "cover",
                }}
                priority
                className="aspect-square rounded-2xl md:max-w-[240px] "
                width={500}
                height={500}
                alt=""
                src={`/me/${image}`}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
const SmallImageContainer = ({
  images,
}: // imagesContainerVariants
{
  images: string[];
  // imagesContainerVariants: Variants;
}) => {
  const imagesContainerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      // opacity: 1,
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Adjust the stagger duration as needed
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };
  return (
    <motion.div className="w-full relative  md:hidden flex items-center justify-center mt-10">
      <motion.div
        variants={imagesContainerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 gap-2"
      >
        {images.map((image, i) => {
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className=" cursor-pointer"
            >
              <Image
                style={{
                  objectFit: "cover",
                }}
                priority
                className="aspect-square rounded-2xl md:max-w-[240px] "
                width={500}
                height={500}
                alt=""
                src={`/me/${image}`}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default HomeSection;
