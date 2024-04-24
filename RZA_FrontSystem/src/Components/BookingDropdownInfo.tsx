import "../CSS_pages/BookingStyle.css"
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";

/* The `function BookingDrop()` is defining a functional component in TypeScript React. This component
is rendering an Accordion component from the react-bootstrap library, which displays information
about being cautious of scam ticket sellers. The component structure includes an AccordionItem with
an AccordionHeader and AccordionBody containing the relevant information about avoiding scam ticket
sellers. */
function BookingDrop (){
    // a drop down that provides users on info about scam ticket sellers

    return (
      <Accordion>
        <AccordionItem eventKey="1" className="w-25 mt-5 accordionCSS">
          <AccordionHeader>Be weary of scam ticket sellers!</AccordionHeader>
            <AccordionBody>
              We are well aware that people promote our tickets at a 'larger discounted price'.
              At RZA we will only ever promote our discounts through our Official website and social media pages,
              never on anything else.
            </AccordionBody>
        </AccordionItem>
      </Accordion>
    );
}

export default BookingDrop;




          