import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdb-react-ui-kit";

function OpenTime(){
    return (
      <MDBCard background="light" border="dark" className="mt-5 w-50">
        <MDBCardBody>
          <MDBCardTitle>Opening Times</MDBCardTitle>
          <MDBCardText>Monday: 10am - 6pm</MDBCardText>
          <MDBCardText>Tuesday: 10am - 6pm</MDBCardText>
          <MDBCardText>Wednesday: 10am - 6pm</MDBCardText>
          <MDBCardText>Thursday: 10am - 6pm</MDBCardText>
          <MDBCardText>Friday: 10am - 6pm</MDBCardText>
          <MDBCardText>Saturday: 11am - 5pm</MDBCardText>
          <MDBCardText>Sunday: 11am - 4pm</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    );
}

export default OpenTime;