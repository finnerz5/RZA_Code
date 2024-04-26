import { Col, Container, Row } from "react-bootstrap";
import HelpC from "../Components/HelpCard";
import HelpCall from "../Components/CardHelpCall";
import OpenTime from "../Components/OpeningTimes";

function Help(){
    return(
        <>
            <div className="HelpHeader text-center pt-5">
                <h1>Help is here!</h1>
            </div>

            <div className="HelpBody">
            <Container>
            <Row>
              <Col>
                <HelpC/>
              </Col>
              <Col> 
                <HelpCall/>
              </Col>
            </Row>
          </Container>

          <Container>
            <OpenTime />
          </Container>
            </div>
        </>
    )
}

export default Help;