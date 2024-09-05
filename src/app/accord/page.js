import AlertInfo from "@/components/Alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function page() {
  const faq = [
    {
      ques: "What is the return policy?",
      ans: "You can return any item within 30 days of purchase with a receipt.",
    },
    {
      ques: "How long does shipping take?",
      ans: "Standard shipping usually takes 3-5 business days.",
    },
    {
      ques: "Do you offer international shipping?",
      ans: "Yes, we ship to over 50 countries worldwide.",
    },
    {
      ques: "Can I track my order?",
      ans: "Yes, you will receive a tracking number once your order is shipped.",
    },
    {
      ques: "How can I contact customer service?",
      ans: "You can reach us via email or call our 24/7 customer support hotline.",
    },
    {
      ques: "Is there a warranty on your products?",
      ans: "Yes, all products come with a 1-year warranty.",
    },
    {
      ques: "Can I change my shipping address after placing an order?",
      ans: "Unfortunately, changes to the shipping address cannot be made once an order is processed.",
    },
    {
      ques: "What payment methods do you accept?",
      ans: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
  ];
  
  return (
    <>
    <AlertInfo />
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
    </>
  );
}
