import Article from "@/components/article";
import { articles } from "../../../../../../public/content/blog";

const article = articles[0];

const Page = () => {
  return (
    <div className="max-w-[1000px] w-full  text-center flex mx-3 px-2 justify-center items-center mb-10 flex-col">
      {article ? <Article article={article} /> : "článek nenalezen"}
    </div>
  );
};
export default Page;
