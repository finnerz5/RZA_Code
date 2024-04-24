import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AccountCredentialsContext } from "../Components/LoginForm/AccountProvider";

/* The `function Account()` is a functional component in a TypeScript React application. It is used to
render the account information of a user. Inside the component, it uses the `useContext` hook to
access the `AccountCredentialsContext` which provides the account credentials data. */

function Account(){
    const accountCredentialsContext = useContext(AccountCredentialsContext)
    
    return(
        <>
            <div className="Account">
                <h1 className="AccountInfo">Account Info</h1>
                <Container className="pt-5">
                    <Row>
                        <Col className="rounded-corners">
                            <p className="fs-3 text-light">Username: {accountCredentialsContext?.accountCredentials?.username}</p>
                        </Col>

                        <Col className="rounded-corners">
                            <p className="fs-3 text-light">Password: {accountCredentialsContext?.accountCredentials?.password}</p> 
                        </Col>
                    </Row>
                </Container>
                            
            </div>    
        </>
    )
}

export default Account;