import { Track } from "@/lib/utils";
import { FC } from "react";
import TrackCard from "../track-card";

const TopTracks: FC<{ tracks: Track[]; isLoading: boolean }> = ({
  tracks,
  isLoading,
}) => {
  return (
    <div className="max-w-2xl w-full mt-4 mb-10">
      <h3 className="text-xl font-semibold tracking-tight">Top Tracks</h3>
      <span className="opacity-80 leading-tight">
        Tracks & Artists I listen quite frequently
      </span>
      <div className="flex flex-col space-y-2 mt-4">
        {isLoading
          ? [...Array(4)].map((i) => {
              return (
                <div
                  key={i}
                  className="w-full bg-neutral-300 rounded-lg h-[80px] dark:bg-dark-bg_soft"
                ></div>
              );
            })
          : tracks?.map((track, index) => {
              return <TrackCard key={index} track={track} />;
            })}
      </div>
    </div>
  );
};

export default TopTracks;
