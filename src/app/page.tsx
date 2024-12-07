import BlogSection from "@/components/section/blog-section";
import HomeSection from "@/components/section/home";
import Link from "next/link";

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
      <div className="max-w-xl mt-10 flex flex-col dark:opacity-90 opacity-80">
        <span className="mt-4">
          I’m open to exploring new opportunities, collaborating on exciting
          projects, or simply connecting. Feel free to reach out via{" "}
          <Link
            className="text-blue-700 opacity-100 dark:text-blue-500"
            target="_blank"
            href={"mailto:ashwinparande1156610c@gmail.com"}
          >
            Email↗
          </Link>
          , follow me on{" "}
          <Link
            className="text-blue-700 opacity-100 dark:text-blue-500"
            target="_blank"
            href={"https://x.com/70Ashrt"}
          >
            {" "}
            Twitter↗
          </Link>
          , or explore my work on{" "}
          <Link
            className="text-blue-700 opacity-100 dark:text-blue-500"
            target="_blank"
            href={"https://github.com/Ashpara10"}
          >
            GitHub↗
          </Link>
          .
        </span>
      </div>
    </div>
  );
};

export default Page;
