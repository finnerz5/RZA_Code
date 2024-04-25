import { MDBBtn } from "mdb-react-ui-kit";
import Hotelheader from "../Components/HotelHeader";
import { useNavigate } from "react-router-dom";

function Hotel(){
    
    const navigate = useNavigate();

    function handleClick(){
        navigate("/stayform");
    }
    return(
        <>
            {/* <div className="body">
                <Hotelheader />
                <MDBBtn onClick={handleClick} outline className='mx-2' color='dark' size="lg">Click Me!</MDBBtn>
            </div> */}
        </>
    )
}

export default Hotel;