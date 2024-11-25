"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about"
      className="max-w-4xl items-center justify-center w-full  flex flex-col  "
    >
      <motion.div className="max-w-2xl w-full">
        <h3 className="tracking-tight text-xl font-semibold">About Me</h3>
        <p className="opacity-80 mt-2">
          Hi there! I’m Ashwin Parande, a passionate and adaptive tech
          enthusiast currently pursuing a Bachelor’s degree in Computer
          Applications (BCA). As a second-year student, I’ve already dived deep
          into the world of web development, honing my skills in crafting
          dynamic, user-friendly solutions. My curiosity drives me to explore
          cutting-edge technologies, and my relentless passion fuels my
          commitment to creating meaningful and impactful digital experiences.
        </p>
      </motion.div>
      <motion.div className="w-full mt-4 py-4 flex items-center justify-center -space-x-10 ">
        {[...Array(4)].map((_, i) => {
          return (
            <motion.div
              //   animate={{
              //     rotate: (i + 1) % 2 === 0 ? 6 : -12,
              //     transition: {
              //       duration: 0.5,
              //       ease: {
              //         type: "spring",
              //         stiffness: 100,
              //         damping: 10,
              //       },
              //     },
              //   }}
              //   whileHover={{ scale: 1.09 }}
              key={i}
              className="aspect-square rounded-3xl hover:translate-x-7 hover:-translate-y-6 transition-all even:rotate-6 odd:-rotate-12 size-60 drop-shadow-2xl dark:bg-neutral-900 bg-neutral-200"
              //   className="w-full dark:shadow-black shadow-light drop-shadow-2xl  min-w-[280px] flex dark:bg-neutral-900 rounded-2xl bg-neutral-50  h-[280px] items-center justify-between"
            >
              {i}
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div className="max-w-2xl w-full">
        <p className="mt-4 opacity-80">
          In addition to my academic journey, I’ve had the privilege of
          contributing to the developer community as the Technical Head of
          MUACM. Through this role, I spearheaded the development of the MUACM
          website, leveraging technologies like Next.js, shadcn, and TypeScript
          to build a robust platform. My experience as a maintainer has
          sharpened my leadership, problem-solving, and collaboration skills,
          while Hacktoberfest has added an open-source dimension to my growth.
          Professionally, my internship at Stacks as a Frontend Web Developer
          has provided invaluable experience in a collaborative, fast-paced
          environment where I’ve worked on key features and embraced new
          challenges.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
