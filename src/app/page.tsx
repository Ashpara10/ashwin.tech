import BlogSection from "@/components/section/blog-section";
import HomeSection from "@/components/section/home";
import { getBlogs } from "@/lib/actions";

const Page = async () => {
  const [blogs] = await Promise.all([
    // await getTracksFromSpotify([
    //   "0rxEPf4Y6uBmV3hkrV340a",
    //   "2xql0pid3EUwW38AsywxhV",
    //   "50iiDJGpAPdr2VTrz999XA",
    //   "2cnKST6T9qUo2i907lm8zX",
    // ]),
    await getBlogs(),
  ]);
  // console.log(tracks);
  return (
    <div className="w-full px-3 flex flex-col items-center justify-start">
      <HomeSection />
      {/* @ts-ignore */}
      <BlogSection blogs={blogs} />
      {/* <TopTracks tracks={tracks?.data!} isLoading={tracks.isLoading} /> */}
    </div>
  );
};

export default Page;
