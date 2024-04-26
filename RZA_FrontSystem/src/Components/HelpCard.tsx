import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdb-react-ui-kit";

function HelpC(){
    return (
        <MDBCard style={{ width: '20rem' }}>
          <MDBCardBody >
            <MDBCardTitle>Contact Support here</MDBCardTitle>
            <MDBCardText>
              Our Team are available daily with 24hr support, helping with whatever problem you have.
            </MDBCardText>
            <MDBBtn href="https://support.microsoft.com/en-gb">Help Now</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      );
}

export default HelpC;