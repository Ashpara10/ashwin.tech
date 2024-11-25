import { Track } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

const TrackCard: FC<{ track: Track }> = ({ track }) => {
  return (
    <div className="w-full hover:bg-neutral-200 dark:hover:bg-dark-border transition-all duration-75  cursor-pointer border rounded-lg border-neutral-300 dark:border-dark-border  flex items-center justify-start">
      <div className="aspect-square rounded-l-lg size-20 overflow-hidden ">
        <Image
          fill
          className="object-fill w-full h-full"
          src={track?.album?.images[0]?.url}
          alt={track.name}
        />
      </div>
      <div className="flex flex-col ml-2 py-1.5">
        <a
          href={track?.external_urls?.spotify}
          target="_blank"
          className="font-medium tracking-tight line-clamp-1 leading-tight"
        >
          {track.name}
        </a>
        <div>
          <span className="opacity-80 text-sm leading-tight">
            {track.artists[0]?.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
