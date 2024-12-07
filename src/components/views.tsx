import { db } from "@/lib/firebase";
import {
  doc,
  getDoc,
  increment,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { Dot } from "lucide-react";
import React, { FC, useEffect } from "react";

type ViewCountProps = {
  slug: string;
};

const ViewCount: FC<ViewCountProps> = ({ slug }) => {
  const [views, setViews] = React.useState<number | null>(null);
  const docRef = doc(db, "views", slug);

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, async (docSnap) => {
      if (!docSnap.exists()) {
        return;
      }
      setViews(docSnap.data().views);
    });
    return () => unsubscribe();
  }, [slug]);

  useEffect(() => {
    (async () => {
      try {
        const doc = await getDoc(docRef);
        if (!doc.exists()) {
          await setDoc(docRef, { views: 1 });
          return;
        }
        await updateDoc(docRef, {
          views: increment(1),
        });
      } catch (error) {
        console.error("Error incrementing view count: ", error);
      }
    })();
  }, []);

  return (
    <>
      <Dot />
      <span>{views} views</span>
    </>
  );
};

export default ViewCount;
