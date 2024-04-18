import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {
  INDEX_PATH,
  BOOKING_PATH,
  ACCOUNT_PATH,
  LOGIN_PATH,
  HELP_PATH,
  HOTEL_PATH,
  INFO_PATH,
  MEMBER_PATH,
  EDUCATION_PATH,
} from "../Constants/Paths";
import Logo from "../assets/Logo.jpg";
import "../CSS_pages/All.css"

function NaviBar() {
  return (
    <>
      <div className="text-style">
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <img src={Logo} width={100} className="d-inline-block align-top px-1" alt="logo"/>
            <Navbar.Brand href={INDEX_PATH}>Riget Zoo Adventures</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href={BOOKING_PATH}>Tickets</Nav.Link>
                <Nav.Link href={HOTEL_PATH}>Hotel</Nav.Link>
                <Nav.Link href={EDUCATION_PATH}>Education</Nav.Link>
                <NavDropdown title="Additional" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href={INFO_PATH}>
                    Information
                  </NavDropdown.Item>
                  <NavDropdown.Item href={HELP_PATH}>Help</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href={MEMBER_PATH}>Membership</Nav.Link>
                <Nav.Link eventKey={2} href={LOGIN_PATH}>
                  Login
                </Nav.Link>
                <Nav.Link eventKey={2} href={ACCOUNT_PATH}>
                  Account
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NaviBar;
