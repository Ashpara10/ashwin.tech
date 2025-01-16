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
    <div className={cn(path === "/" ? "mt-12" : " mt-4")}>
      <h2 className="w-full  text-left text-2xl font-medium ">Guestbook 🌱</h2>
      <span className="leading-tight opacity-80">
        SignIn with your google account to leave a message in the guestbook
      </span>
      <div className="mt-2 py-3 bg-neutral-100 dark:bg-neutral-700  rounded-xl px-3 border border-neutral-200 dark:border-neutral-600 w-full">
        <div className="flex flex-col items-start justify-center">
          {!user && (
            <button
              onClick={async () => {
                const provider = new GoogleAuthProvider();
                signInWithPopup(auth, provider);
              }}
              className="underline flex items-center justify-center gap-2 underline-offset-2 opacity-80 mt-2 "
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
