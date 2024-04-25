import HotelBooking from "../Components/HotelBookingComps/HotelBookingForm";

// this is an invisible page that holds the form for booking a stay at the hotel. allows for button on hotel page to redirect them to the form.

function HotelForm(){
    
    return(
        <HotelBooking />
    )
}

export default HotelForm;