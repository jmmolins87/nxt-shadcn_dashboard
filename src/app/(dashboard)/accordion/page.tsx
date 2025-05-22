



import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const itemsAccordion = [
  {
    item: 1,
    trigger: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern."
  },
  {
    item: 2,
    trigger: "Is it styled?",
    content: "Yes. It comes with default styles that matches the other components&apos; aesthetic."
  },
  {
    item: 3,
    trigger: "Is it animated?",
    content: "Yes. It's animated by default, but you can disable it if you prefer."
  }
]


export default function AccordionPage() {

  return (

    <Accordion 
      type="single" 
      collapsible 
      className="w-full">
      {
        itemsAccordion.map(( item ) => (
          <AccordionItem key={ item.item } value={`item-${ item.item }`}>
            <AccordionTrigger className="text-lg cursor-pointer">{ item.trigger }</AccordionTrigger>
            <AccordionContent>{ item.content }</AccordionContent>
          </AccordionItem>
        ))
      }
    </Accordion>
  );
}