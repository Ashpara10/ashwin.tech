import GuestBookCard from "@/components/guestbook-card";
import Footer from "@/components/section/footer";
import HomeSection from "@/components/section/home";
import Projects from "@/components/section/projects";

const Page = async () => {
  return (
    <div className="w-full px-3 flex flex-col items-center justify-start">
      <div className="max-w-2xl w-full flex flex-col">
        <HomeSection />
        <Projects />
        {/* <BlogSection /> */}
        <GuestBookCard />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
