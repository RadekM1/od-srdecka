import {
  AccordionFaq,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../../../components/UI/accordionFaq';
import { getFaq } from '@/lib/fetch/get-faq';

const faqContext = await getFaq();

const Faq = () => {
  return (
    <AccordionFaq type="single" collapsible className="mt-16 w-full text-start">
      {faqContext.map((item, i) => {
        return (
          <AccordionItem
            className="my-4 rounded-xl text-start shadow-sm shadow-gray-400"
            key={i}
            value={`item-${i}`}
          >
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className="p-2">
              <p className="whitespace-pre-line">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </AccordionFaq>
  );
};
export default Faq;
