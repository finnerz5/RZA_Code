import { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import room from "../../assets/HotelBedroom.jpg";
import food from "../../assets/SafariRestaurant.jpg";
import desk from "../../assets/Reception.jpg";

function Hotelcarousel(){
    const themeContext = useContext(ThemeContext);

    return(
        <>
        <Carousel data-bs-theme={themeContext?.theme} className="">
            <Carousel.Item>
                <img className="d-block w-100" src={room} alt="First slide" width={315} height={630} />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
                <Carousel.Caption className="text-light " style={{width: "25rem"}}>
                    <h5>hotel rooms</h5>
                    <p>This is what one of our standard rooms looks like.</p>
                </Carousel.Caption>
            </Carousel.Item>
        
            <Carousel.Item>
                <img className="d-block w-100" src={food} alt="Second slide" width={315} height={630} />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
                <Carousel.Caption className="text-light text-xl-start">
                    <h5>Restaurant</h5>
                    <p>our safari themed restaurant offers the highest quality of food.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img className="d-block w-100" src={desk} alt="Second slide" width={315} height={630} />
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
                <Carousel.Caption>
                    <h3>our staff</h3>
                    <p>upon arrival at the hotel you meet our friendly staff at the reception where you can check into your room.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default Hotelcarousel;