"use client";
import { auth, db } from "../../lib/firebase";
import {
  collection,
  DocumentData,
  onSnapshot,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import Input from "@/components/input";
import Guestbook from "@/components/guestbook";

const q = query(collection(db, "chat"));

const Page = () => {
  const [chat, setChat] = useState<QuerySnapshot<DocumentData, DocumentData>>();
  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      setChat(querySnapshot);
    });
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <div className="max-w-xl w-full">
        <Guestbook />
        <div className=" mt-2 w-full flex flex-col gap-y-1 ">
          {chat?.docs
            ?.sort((a, b) => a?.data()?.createdAt - b?.data().createdAt)
            ?.map((c, i) => {
              const { user, data } = c?.data();
              return (
                <div
                  key={i}
                  id={`chat-${c?.id}`}
                  className={`w-full flex gap-x-1   `}
                >
                  <span className="w-full flex-wrap">
                    <span className="opacity-80">{user}</span>: {data}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Page;
