import { MDBBtn } from "mdb-react-ui-kit";
import header from "../assets/Booking_header_image.jpg";

function BookingHeader(){
    // component that creates a header for the top of the booking page.

    return(
        <>
        <header>
            <div id="header-img" className="p-5 text-center bg-image h-60" style={{ backgroundImage: `url(${header})` }}>
                <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                    <h1 className="mb-3">Book Your Tickets here</h1>
                    <h5 className="mb-4">Cheap low prices for everyone</h5>
                    <br/>
                    <h6>click here to book the hotel!</h6>
                    <MDBBtn className="m-2" tag="a" outline size="lg" rel="nofollow" target="_blank" href="/hotel">Book hotel here</MDBBtn>
                </div>
                </div>
                </div>
            </div>
      </header>
        </>
    )
}

export default BookingHeader;