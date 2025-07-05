"use client";
import { auth } from "@/lib/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import { useState } from "react";
import Input from "./input";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const GuestBookCard = () => {
  const [user, setUser] = useState<User | null>(null);
  const path = usePathname();
  onAuthStateChanged(auth, (u) => {
    if (u) {
      setUser(u);
    } else {
      setUser(null);
    }
  });

  return (
    <div className={cn("font-aspekta mt-10 mx-auto w-full max-w-2xl")}>
      <h2 className="w-full text-left text-lg tracking-tight font-medium font-inter">
        Guestbook 🌱
      </h2>
      <span className="leading-tight dark:text-neutral-300 text-neutral-600 text-sm font-medium md:text-base mt-2 font-aspekta">
        SignIn with your google account to leave a message in the guestbook
      </span>
      <div className="mt-4 px-6 py-3 bg-amber-50 dark:bg-neutral-800 border border-neutral-200 dark:border-dark-bg_soft w-full">
        <div className="flex flex-col items-start justify-center">
          {!user && (
            <button
              onClick={async () => {
                const provider = new GoogleAuthProvider();
                signInWithPopup(auth, provider);
              }}
              className="underline flex items-center justify-center gap-2 underline-offset-2 text-neutral-800 dark:text-neutral-300 "
            >
              {" "}
              SignIn with Google
            </button>
          )}
          <div className="mt-2 w-full">{user && <Input user={user} />}</div>
        </div>
      </div>
    </div>
  );
};

export default GuestBookCard;
