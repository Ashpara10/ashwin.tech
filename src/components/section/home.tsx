"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HomeSection = () => {
  return (
    <motion.div
      id="home"
      className="w-full mx-auto mt-16  max-w-2xl  flex flex-col  "
    >
      {/* <div className=" w-full   max-w-2xl mx-auto mt-16 -z-10 border-t-2 border-dashed dark:border-dark-bg_soft " /> */}

      <motion.div className="w-full mt-10 flex items-center justify-start">
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex flex-col items-start justify-center">
            <div className="w-full flex items-center justify-between">
              <span className="font-instrument-serif flex items-center justify-start text-left text-4xl md:text-5xl lg:text-6xl font-medium md:font-semibold ">
                {" "}
                Ashwin Parande
                <span className="tracking-tighter leading-none">🌻🌊</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="w-full flex flex-col items-start justify-center mt-6 mb-2">
        <div className=" gap-y-2 text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300  flex flex-col ">
          <span>
            I am web developer based in India with an innate passion and
            curiosity for <br className="hidden md:flex" /> art, programming and
            all things tech.
          </span>
          <video width="100%" autoPlay muted playsInline loop className="mt-2">
            <source src="/banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <span className="mt-4 whitespace-pre-wrap">
            I like to read articles (sometimes) and watch movies and play
            football. <br className="hidden md:flex" /> I also write sometimes.
            You can reach me at
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
    </motion.div>
  );
};

export const LargeImageContainer = ({
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
      transition: {
        staggerChildren: 0.2, // Adjust the stagger duration as needed
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
                x: -10,
                y: -20,
              }}
              className="aspect-square hover:shadow-2xl rounded-3xl overflow-hidden size-48 cursor-pointer"
            >
              <Image
                style={{
                  objectFit: "cover",
                }}
                priority
                fill
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
        // variants={imagesContainerVariants}
        // initial="hidden"
        // animate="visible"
        className="relative h-[200px] w-full  flex"
      >
        {images.map((image, i) => {
          return (
            <motion.div
              key={i}
              style={{
                zIndex: images.length - i,
              }}
              // variants={itemVariants}
              initial={{
                x: 0,
              }}
              whileInView={{
                x: i * 50,
              }}
              className="absolute  shadow-2xl cursor-pointer"
            >
              <Image
                style={{
                  objectFit: "cover",
                }}
                priority
                className="aspect-square  size-48 rounded-2xl  "
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
