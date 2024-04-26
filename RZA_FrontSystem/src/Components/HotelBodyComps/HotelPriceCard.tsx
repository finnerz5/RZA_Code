import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdb-react-ui-kit";

function PriceCard(){
    return (
      <MDBCard background="success" border="dark" className="w-50">
        <MDBCardBody>
          <MDBCardTitle>Prices</MDBCardTitle>
          <MDBCardText>Single double bed room: £20 per night</MDBCardText>
          <MDBCardText>Twin double bed room: £28 per night</MDBCardText>
          <MDBCardText>twin single bed room: £25 per night</MDBCardText>
          <MDBCardText>Normal family room: £32 per night</MDBCardText>
          <MDBCardText>Deluxe family room: £36 per night</MDBCardText>
          <MDBCardText>Disabled access family room: £30 per night</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    );
}

export default PriceCard;