import {
  AccordionFaq,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/UI/accordionFaq";
import { getFaq } from "@/lib/fetch/get-faq";

const faqContext = await getFaq();

const Faq = () => {
  return (
    <AccordionFaq
      type="single"
      collapsible
      className="w-full mt-16 text-start "
    >
      {faqContext.map((item, i) => {
        return (
          <AccordionItem
            className="shadow-sm rounded-xl text-start shadow-gray-400 my-4"
            key={i}
            value={`item-${i}`}
          >
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className=" p-2 ">{item.answer}</AccordionContent>
          </AccordionItem>
        );
      })}
    </AccordionFaq>
  );
};
export default Faq;
