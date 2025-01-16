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
import { db } from "../../lib/firebase";
import { motion, Variants } from "framer-motion";

const q = query(collection(db, "chat"));

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
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="max-w-xl w-full">
        <GuestBookCard />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className=" mt-2 w-full flex flex-col gap-y-1 "
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
                  className={`w-full flex gap-x-1   `}
                >
                  <span className="w-full flex-wrap">
                    <span className="opacity-80">{user}</span>: {data}
                  </span>
                </motion.div>
              );
            })}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
