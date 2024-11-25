import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export type Track = {
  album: {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: {
      url: string;
      height: number;
      width: number;
    }[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions?: {
      reason: string;
    };
    type: string;
    uri: string;
    artists: {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
  };
  artists: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_playable: boolean;
  linked_from?: Record<string, unknown>;
  restrictions?: {
    reason: string;
  };
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
};

// export const refreshAccessToken = async () => {
//   const refresh_token = localStorage.getItem("refresh_token");
//   const res = await fetch("https://accounts.spotify.com/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization: `Basic ${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
//     },
//     body: new URLSearchParams({
//       grant_type: "refresh_token",
//       refresh_token: refreshAccessToken,

//     }),
// };

export const getTracksFromSpotify = async (ids: string[]) => {
  let isLoading = true;
  const res = await fetch(
    `https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`,
    {
      headers: {
        Authorization: `Bearer BQAP7_FSQf717q_NTMshI684OEJLKS9_s6jASIcMda2rljkc_hH8d8wvGBa96dzoUT33kHSfcOIb5o-LHPYuUP7eLwtDuiDF9_xLp1AvbU4pHIEWTJTFkm1OzrKZp7XjbPDKoffEEas-Z_yY2_f8bWQWI20z3lyaQRclCHHuKoGEIJAbm_s9xcCMBC52tyUurUxCxxKfNDgFHteOB0aW-g`,
      },
    }
  );
  const data = await res.json();
  if (res.status !== 200) {
    isLoading = false;
    return { data: null, isLoading };
  }
  console.log(data);
  isLoading = false;
  return { data: data?.tracks as Track[], isLoading };
};
