"use client";
import GuestBookCard from "@/components/guestbook-card";
import {
  collection,
  DocumentData,
  onSnapshot,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { motion, Variants } from "framer-motion";

const q = query(collection(db, "chat"));

const Guestbook = () => {
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
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="max-w-2xl w-full">
        <GuestBookCard />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className=" mt-6 border border-neutral-200 dark:border-dark-border"
        >
          {chat?.docs
            ?.sort((a, b) => a?.data()?.createdAt - b?.data().createdAt)
            ?.map((c, i) => {
              const { user, data } = c?.data();
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  custom={i}
                  id={`chat-${c?.id}`}
                  className={`w-full flex  gap-x-1 dark:bg-neutral-800 border-t border-neutral-200 dark:border-dark-border first:border-none py-1 px-4 `}
                >
                  <span className="text-neutral-600 dark:text-neutral-300 tracking-tight text-sm md:text-base">
                    {user}:
                    <span className="flex-wrap text-neutral-900 dark:text-neutral-100 opacity-100 ml-1 font-medium">
                      {data}
                    </span>{" "}
                  </span>
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </div>
  );
};

export default Guestbook;
