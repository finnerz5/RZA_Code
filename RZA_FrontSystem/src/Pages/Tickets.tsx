
/* The `function Ticket(){` is defining a functional component named `Ticket`. This component returns
the `BookingLayout` component, which is being rendered when the `Ticket` component is used. */

import TicketForm from "../Components/TicketBookingComps/BookingForm";

function Ticket(){
    return(
        <TicketForm />
    )
}

export default Ticket;