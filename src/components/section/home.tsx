"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HomeSection = () => {
  const images = ["me1.jpg", "me2.jpg", "me4.jpg", "me3.jpg"];
  return (
    <motion.div
      id="home"
      className="w-full mx-auto mt-16  max-w-xl  flex flex-col  "
    >
      <h1 className=" tracking-tighter flex items-center justify-start text-left text-2xl text-white">
        {" "}
        Ashwin Parande
        <span className="tracking-tighter leading-none">🌻🌊</span>
      </h1>
      <motion.div className="w-full flex flex-col items-start justify-center mt-6 mb-2">
        <p className="">
          I am web developer based in India with an innate passion and
          curiosity for <u>art</u>, <u>programming</u> and all things tech.
        </p>

        <p className="mt-4">
          I like to read articles (sometimes) and watch movies and play
          <u className="ml-1">football</u>.
          I also write sometimes.
          You can reach me at <Link
            className="text-sky-700 mx-2 opacity-100 dark:text-sky-500"
            target="_blank"
            href={"mailto:ashwinparande1156610c@gmail.com"}
          >
            ashwinparande1156610c@gmail.com
          </Link>{" "}
        </p>
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
