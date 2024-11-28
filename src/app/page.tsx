import BlogSection from "@/components/section/blog-section";
import HomeSection from "@/components/section/home";

const Page = async () => {
  // const [] = await Promise.all([
  // await getTracksFromSpotify([
  //   "0rxEPf4Y6uBmV3hkrV340a",
  //   "2xql0pid3EUwW38AsywxhV",
  //   "50iiDJGpAPdr2VTrz999XA",
  //   "2cnKST6T9qUo2i907lm8zX",
  // ]),

  // ]);
  // console.log(tracks);
  return (
    <div className="w-full px-3 flex flex-col items-center justify-start">
      <HomeSection />
      {/* @ts-ignore */}
      <BlogSection />
      {/* <TopTracks tracks={tracks?.data!} isLoading={tracks.isLoading} /> */}
    </div>
  );
};

export default Page;
