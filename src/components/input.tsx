import { signOut, User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { auth, db } from "../lib/firebase";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

const Input = ({ user }: { user: User }) => {
  const [msg, setMsg] = useState("");
  const router = useRouter();
  const path = usePathname();
  const addMessage = async (data: string, user: string) => {
    if (data.length === 0) {
      alert("Please enter a message");
      return;
    }
    const chat = await addDoc(collection(db, "chat"), {
      user: user,
      data: data,
      createdAt: Date.now(),
    });
    setMsg("");
    if (path === "/") {
      router.push("/guestbook");
      document?.getElementById(`chat-${chat?.id}`)?.scrollIntoView({
        behavior: "smooth",
      });
    }
    document?.getElementById(`chat-${chat?.id}`)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full max-w-2xl  flex flex-col  items-center justify-center gap-x-2  ">
      <div className="w-full flex flex-col items-start justify-center mb-4">
        <div className="flex items-center border-2 border-neutral-200 dark:border-neutral-800 p-1 rounded-xl focus-within:outline-double focus-within:outline-offset-2 focus-within:outline-neutral-200 focus-within:dark:outline-neutral-800 w-full justify-center gap-x-2">
          <input
            type="text"
            value={msg}
            className="w-full caret-sky-500 text-white  bg-transparent focus-visible:outline-none tracking-normal font-inter px-3 py-2"
            onKeyDown={(e) => {
              if (e?.key === "Enter") {
                e.preventDefault();
                addMessage(msg, user?.displayName as string);
              }
            }}
            onChange={(e) => setMsg(e?.target?.value)}
          />
          <Button
            onClick={() => addMessage(msg, user?.displayName as string)}
            // size={"icon"}
            className="rounded-xl dark:bg-white font-inter dark:text-black flex-shrink-0 "
          >
            {/* <ArrowUp strokeWidth={3} className="size-4 dark:stroke-black" /> */}
            Send
          </Button>
        </div>
        <button
          className="underline text-sm text-neutral-800 dark:text-neutral-300 underline-offset-2 opacity-80 px-2 py-1.5 rounded-lg flex items-center justify-center "
          onClick={() => {
            signOut(auth);
          }}
        >
          Signout
        </button>
      </div>
    </div>
  );
};

export default Input;
