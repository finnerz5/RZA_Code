import { Col, Container, Row } from "react-bootstrap";
import HPheader from "../Components/HomePageHeader";
import HPcarousel from "../Components/HomepageCarousel";
import "../CSS_pages/HomepageStyle.css";
import { MDBBtn } from "mdb-react-ui-kit";
import review from "../assets/Review_box.jpg";
import CardInfo from "../Components/CardInfo";
import CardBook from "../Components/CardBook";
import CardContact from "../Components/CardContact";
/* The `Homepage()` function is a React functional component that represents the homepage of a website.
Inside this function, JSX (a syntax extension for JavaScript that looks similar to HTML) is used to
define the structure and content of the homepage. The function returns the JSX elements that make up
the homepage layout, including headers, paragraphs, buttons, reviews, images, and cards. */

function Homepage() {

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

        <div className="d-grid gap-4 d-md-block mt-5">
          <MDBBtn rounded color="warning" href="/info" size="lg">Opening times</MDBBtn>
          <MDBBtn rounded color="success" href="/info" size="lg">Accessibility</MDBBtn>
          <MDBBtn rounded color="warning" href="/loyalty" size="lg">Become a member</MDBBtn>
          <MDBBtn rounded color="success" href="/help" size="lg">Getting here</MDBBtn>
        </div>

        <div className="Reviews mt-5">
          <h1>What people think</h1>
          <div className="row">
            <div className="col">    
              <p className="paraRev">
                "i visied RZA with my family on a weekend. It was an amazing day out and the kids really enjoyed it.
                We visited because our children really wanted to see a bengal tiger, we was not disappointed. This is
                definately my favourite zoo ive visited in my life time and ive been to a fair few." -Ryan.L         
              </p>
            </div>

            <div className="col">          
              <p className="paraRev">
                "For a zoo this is a great day out. We arrived at 11am and didnt leave until 5pm. Theres plenty of animals to see
                and something for everyone. This place isnt expensive like most zoos so you definately get your moneys worth." -Chris.F         
              </p>
            </div> 

            <div className="col">
            <p className="paraRev">
                "Came here with just my boyfriend for a nice day out. We booked online which was super easy must i say, tickets we arrived
                through the mail in just 2 days time. We had loads of fun petting some of the smaller animals, which is totally worth the small fee.
                We would definately come back again in the future. 10/10" -Jody.S         
              </p>
            </div>
          </div> 
        </div>

        <div className="">
          <img src={review} width={300} height={200} className="revIMG"/>
        </div>

        <div className="Cards mt-5">
          <Container>
            <Row>
              <Col>
                <CardInfo/>
              </Col>
              <Col> 
                <CardBook/>
              </Col>
              <Col>
                <CardContact/>    
              </Col>
            </Row>
          </Container>
        </div>
        
      </div>
    </>
  );
}

export default Homepage;
