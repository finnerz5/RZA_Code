import { Button, Container } from "react-bootstrap";
import HPheader from "../Components/HomePageHeader";
import HPcarousel from "../Components/HomepageCarousel";
import icon from "../assets/accessibility.png";
import "../Pages/HomepageStyle.css"
import { Link } from "react-router-dom";

function Homepage() {
  /* On the homepage i use simple div classes to seperate my code into different functions, the header contains a simple component, the body will hold all main
  parts of the homepage to give it its feel and look for the user */

  return (
    <>
      <div className="Header">
        <HPheader />
      </div>

      <div className="body pt-5">
        <h1>A family day packed with experience</h1>
        <p className="para1">Feel closer to nature at Riget Zoo, a 'safari-styled' reserve located in the heart of England.
          Discover the worlds fascinating creatures, learn about them on our educational visits and share
          everlasting memories of our roaring natural world.
        </p>

        <Container className="pt-5">
          <Container>
              <HPcarousel />
            </Container>
        </Container>

        <div className="button mt-5">
          <Button variant="warning">Warning</Button>
        </div>
        
      </div>
    </>
  );
}

export default Homepage;
