import BookingDrop from "../Components/BookingDropdownInfo";
import BookingHeader from "../Components/BookingHeader";
import "../CSS_pages/BookingStyle.css";

function Booking(){
    return(
        <>
            <div className="header">
                <BookingHeader />    
            </div>

            <div className="body mt-5">
                <h1 className="title">Riget Zoo Adventures Tickets</h1>
                <h2 className="mt-3">Experience the planets beautiful creatures here at Riget zoo</h2>
                <h6 className=" para1 mt-3">
                    There is plenty of ways to secure your tickets at RZA; whether this be booking them
                    online, Through our membership programme, standard or flexible park tickets. Use the
                    dropdowns below for more infromation. And as always youll find the best tickets only here
                    on our website.
                </h6>

                <BookingDrop />

            </div>
        </>
    )
}

export default Booking;