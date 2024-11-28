import BlogCard from "@/components/blog-card";
import { allPosts } from "content-collections";

export default async function Blogs() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section className="max-w-2xl gap-y-3 w-full flex flex-col ">
        {allPosts
          .sort(
            (a, b) =>
              new Date(b?.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .map((data, i) => {
            return <BlogCard key={i} {...data} />;
          })}
      </section>
    </div>
  );
}
