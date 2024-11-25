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

const q = query(collection(db, "chat"));

const Page = () => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState<QuerySnapshot<DocumentData, DocumentData>>();
  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      setChat(querySnapshot);
    });
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <h2 className="w-full max-w-2xl mb-2 text-left text-2xl font-medium md:text-4xl md:font-semibold">
        Guestbook 🌱
      </h2>
      {!user && (
        <>
          <div className="w-full max-w-2xl flex flex-col items-start justify-center gap-2 mb-4">
            <span className="opacity-90 leading-snug flex flex-wrap max-w-md">
              Authenticate with your Google account to leave a message in the
              guestbook{" "}
              <button
                onClick={async () => {
                  const res = await signInWithPopup(auth, provider);
                  setUser(res.user);
                }}
                className="underline flex items-center justify-center gap-2 underline-offset-2 opacity-80 mt-2 "
              >
                {" "}
                SignIn with Google
              </button>
            </span>
          </div>
        </>
      )}
      {user && <Input user={user} setUser={setUser} />}

      <div className="max-w-2xl mt-2 w-full flex flex-col gap-y-1 ">
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
  );
};

export default Page;
