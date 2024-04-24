import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import wildlife from "../assets/wildlife_card.png"

/* The `function CardInfo()` is a functional component in React that defines the structure and content
of a card component. Inside the function, a Card component from the react-bootstrap library is being
rendered with an image, title, text, and a link. The image displayed in the card is sourced from the
`wildlife` asset file. The card displays information about the organization's mission related to
wildlife conservation and provides a link for users to find out more information. */
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