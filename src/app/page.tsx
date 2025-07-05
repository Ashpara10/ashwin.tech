import Guestbook from "@/components/guestbook";
import Footer from "@/components/section/footer";
import HomeSection, { LargeImageContainer } from "@/components/section/home";
import Projects from "@/components/section/projects";
import SocialLinks from "@/components/section/social-links";

const Page = async () => {
  const images = ["me1.jpg", "me2.jpg", "me4.jpg", "me3.jpg"];
  return (
    <div className="w-full px-4 pb-8 relative">
      <HomeSection />
      <SocialLinks />

      <Projects />
      {/* <Guestbook /> */}

      <Footer />
    </div>
  );
};

export default Page;
