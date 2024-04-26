import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AccountCredentialsContext } from "../Components/LoginForm/AccountProvider";
import { MDBBtn } from "mdb-react-ui-kit";
import "../CSS_pages/All.css";

function Loyal(){
    const accountCredentialsContext = useContext(AccountCredentialsContext)
    return(
        <>
            <div className="membership">
                <h1 className="AccountInfo text-center pt-5">Welcome to the membership page</h1>
                <Container className="pt-5">
                    <Row>
                        <Col className="rounded-corners">
                            <p className="fs-3 text-dark">Username: {accountCredentialsContext?.accountCredentials?.username}</p>
                        </Col>

                        <Col className="rounded-corners ">
                            <p className="fs-3 text-dark">Password: {accountCredentialsContext?.accountCredentials?.password}</p> 
                        </Col>
                    </Row>
                    <Row>
                        <MDBBtn href="/membershipsignup">Click to become member</MDBBtn>
                    </Row>    
                </Container>

                
                
                            
            </div>    
        </>
    )
}

export default Loyal;