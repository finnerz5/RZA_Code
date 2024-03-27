import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { INDEX_PATH, BOOKING_PATH, ACCOUNT_PATH, LOGIN_PATH, HELP_PATH, HOTEL_PATH, INFO_PATH, MEMBER_PATH } from "../Constants/Paths";

function NaviBar(){
    return(
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href={INDEX_PATH}>Riget Zoo Adventures</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={BOOKING_PATH}>Bookings</Nav.Link>
                        <Nav.Link href={MEMBER_PATH}>Membership</Nav.Link>
                        <NavDropdown title="Additional" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href={INFO_PATH}>Information</NavDropdown.Item>
                            <NavDropdown.Item href={HOTEL_PATH}>Hotel</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href={HELP_PATH}>Help</Nav.Link>
                        <Nav.Link eventKey={2} href={ACCOUNT_PATH}>Account</Nav.Link>
                        <Nav.Link eventKey={2} href={LOGIN_PATH}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NaviBar;