import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,  } from "mdb-react-ui-kit";

function HelpCall(){
    return(
    <MDBCard style={{ width: '20rem' }}>
          <MDBCardBody >
            <MDBCardTitle>Call us Now</MDBCardTitle>
            <MDBCardText>
              We Accept Calls from 9-5 from Monday to Friday
            </MDBCardText>
            <a href="tel:0800 001 6990"> Call_Now </a>
          </MDBCardBody>
        </MDBCard>
      );
}

export default HelpCall;