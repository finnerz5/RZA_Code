import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import wildlife from "../assets/wildlife_card.png"

function CardInfo(){
    return (
        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src={wildlife} width={125} height={300}/>
          <Card.Body>
            <Card.Title>What we do!</Card.Title>
            <Card.Text>
              At RZA we aim to ensure that all our animals are well looked after.
              We aim to help stop poachers by donating to wildlife trusts across the globe.
              click here for more info.
            </Card.Text>
            <Link to="/info">Find out</Link>
          </Card.Body>
        </Card>
      );
}

export default CardInfo;