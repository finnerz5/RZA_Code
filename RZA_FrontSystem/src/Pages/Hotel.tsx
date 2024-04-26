import { MDBBtn } from "mdb-react-ui-kit";
import Hotelheader from "../Components/HotelBodyComps/HotelHeader";
import { useNavigate } from "react-router-dom";
import Hotelcarousel from "../Components/HotelBodyComps/HotelCarousel";
import { Container } from "react-bootstrap";
import HotelInfo from "../Components/HotelBodyComps/Info";
import PriceCard from "../Components/HotelBodyComps/HotelPriceCard";
import HbookCard from "../Components/HotelBodyComps/BookLinkCard";

function Hotel(){

    return(
        <>
            <div className="header">
                <Hotelheader />
            </div>


            <Container className="pt-5">
                <Container>
                    <Hotelcarousel />
                </Container>
            </Container>

            <div className="body">
                <HotelInfo />
            <Container>
                <PriceCard />
            </Container>

            <Container>
                <HbookCard />
            </Container>
            </div>
            
        </>
    )
}

export default Hotel;