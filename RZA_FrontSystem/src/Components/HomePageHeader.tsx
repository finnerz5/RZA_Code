import { MDBBtn } from "mdb-react-ui-kit";
import backgroundImage from "../assets/homepage-header.jpg";

function HPheader() {
  // a simple component that creates a header for my homepage
  
  return (
    <>
      <header>
        <div
          id="header-img"
          className="p-5 text-center bg-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Visit Riget Zoo Adventure</h1>
                <h5 className="mb-4">Voted best zoo in the UK 2024</h5>
                <MDBBtn className="m-2" tag="a" outline size="lg" rel="nofollow" target="_blank" href="/booking">Book Tickets</MDBBtn>

                <MDBBtn className="m-2" tag="a" outline size="lg" target="_blank" href="/loyalty">Become a member</MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HPheader;
