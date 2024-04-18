import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import help from "../assets/Contact_icon.jpg";

function CardContact(){
    return (
        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src={help}  width={125} height={300} />
          <Card.Body>
            <Card.Title>Contact us!</Card.Title>
            <Card.Text>
              RZA's biggest priority is ensuring our customers are always pleased.
              If there is ever an issue do not hesitate to contact us, our team are 
              here to help whatever the time.
            </Card.Text>
            <Link to="/help">Help is here!</Link>
          </Card.Body>
        </Card>
      );
}

export default CardContact;