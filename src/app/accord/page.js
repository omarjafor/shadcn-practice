import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function page() {
  const faq = [
    {
      ques: "Is it accessible? 01",
      ans: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      ques: "Is it accessible? 02",
      ans: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      ques: "Is it accessible? 03",
      ans: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      ques: "Is it accessible? 04",
      ans: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      ques: "Is it accessible? 05",
      ans: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      ques: "Is it accessible? 06",
      ans: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      ques: "Is it accessible? 07",
      ans: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      ques: "Is it accessible? 08",
      ans: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-between p-24">
      {faq.map((item, id) => (
        <Accordion key={id} type="single" collapsible className="w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>{item.ques}</AccordionTrigger>
            <AccordionContent>{item.ans}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
