import { blogGallery } from "../../../../../public/content/temporary-galleries";
import BlogGallery from "@/components/UI/blogList";

const Page = () => {
  return (
    <>
      <BlogGallery gallery={blogGallery} />
    </>
  );
};
export default Page;
