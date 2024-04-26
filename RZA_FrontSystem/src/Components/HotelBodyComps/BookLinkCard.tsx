import { MDBCard, MDBRow, MDBCol, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdb-react-ui-kit";
import gorilla from "../../assets/GorillaCard.jpg";
import { useNavigate } from "react-router-dom";
import "../../CSS_pages/All.css";

function HbookCard(){

    const navigate = useNavigate();

    function handleClick(){
        navigate("/stayform");
    }

    return (
        <MDBCard className="Hcard mt-5" style={{ maxWidth: '850px' }}>
          <MDBRow className='g-0'>
            <MDBCol md='4'>
              <MDBCardImage src={gorilla} fluid/>
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody className="">
                <MDBCardText>
                  We look forward to your visit. Press the button down below to book your spot at the hotel now.
                </MDBCardText>
                <MDBBtn onClick={handleClick} outline className='mx-2' color='dark' size="lg">Click Me!</MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      );
}

export default HbookCard;