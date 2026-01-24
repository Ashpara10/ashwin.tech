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
    <div className={cn(" mt-2 mx-auto w-full max-w-xl")}>
      <h2 className="w-full text-left text-xl tracking-tight dark:text-white">
        Guestbook 🌱
      </h2>
      <p className="text-base mt-2 text-neutral-700 dark:text-neutral-400  flex flex-col">
        Write something in this public log. SignIn with your google account to leave a message.
      </p>
      <div className="mt-2">
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
