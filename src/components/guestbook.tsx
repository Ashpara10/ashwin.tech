"use client";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import React, { useState } from "react";
import Input from "./input";

const Guestbook = () => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState<User | null>(null);
  return (
    <div className="max-w-xl w-full">
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
    </div>
  );
};

export default Guestbook;
