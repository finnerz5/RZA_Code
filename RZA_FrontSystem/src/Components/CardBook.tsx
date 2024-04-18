import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import booking from "../assets/Booking_icon.jpg";

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