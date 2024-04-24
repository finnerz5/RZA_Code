import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import booking from "../assets/Booking_icon.jpg";

/* The `CardInfo` function is a React functional component that returns JSX code representing a card
component. This card component includes an image, title, description, and a link to a booking page.
The card displays information about booking tickets to visit animals or stay at a hotel. */
function CardInfo(){
    return (
        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src={booking}  width={125} height={350}/>
          <Card.Body>
            <Card.Title>Visit us!</Card.Title>
            <Card.Text>
                Book tickets to come visit our amazing animals, or book a stay at our hotel.
            </Card.Text>
            <Link to="/booking">book now</Link>
          </Card.Body>
        </Card>
      );
}

export default CardInfo;