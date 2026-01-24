"use client"
import GuestBookCard from "@/components/guestbook-card";
import Footer from "@/components/section/footer";
import HomeSection from "@/components/section/home";
import SocialLinks from "@/components/section/social-links";
import { collection, DocumentData, onSnapshot, query, QuerySnapshot, orderBy, limit } from "firebase/firestore";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import Work from "@/components/section/work";
const q = query(collection(db, "chat"), orderBy("createdAt", "desc"), limit(5));

const Page = () => {
  const [chat, setChat] = useState<QuerySnapshot<DocumentData, DocumentData>>();
  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      setChat(querySnapshot);
    });
  }, []);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      transition: {
        delay: i * 0.08,
        type: "tween",
      },
      opacity: 1,
      y: 0,
    }),
  };



  return (
    <div className="w-full px-4 pb-8 relative">
      <HomeSection />
      {/* <Projects /> */}
      <div className="h-2 border-t-2 border-dotted mb-2 border-neutral-200 dark:border-neutral-700 mt-4 max-w-xl mx-auto" />
      <Work />
      <div className="h-2 border-t-2 border-dotted mb-2 border-neutral-200 dark:border-neutral-700 mt-4 max-w-xl mx-auto" />
      <GuestBookCard />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=" mt-2 border rounded-xl border-neutral-200 max-w-xl mx-auto dark:border-neutral-800"
      >
        {chat?.docs
          ?.map((c, i) => {
            const { user, data } = c?.data();
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                custom={i}
                id={`chat-${c?.id}`}
                className={`w-full flex  gap-x-1 border-t border-neutral-200 dark:border-neutral-800 first:border-none py-1.5 px-4 `}
              >
                <span className="text-neutral-800 text-sm dark:text-neutral-300 tracking-tight">
                  {user}:
                  <span className="flex-wrap text-neutral-900 dark:text-neutral-100 opacity-100 ml-2 font-medium">
                    {data}
                  </span>{" "}
                </span>
              </motion.div>
            );
          })}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Page;
