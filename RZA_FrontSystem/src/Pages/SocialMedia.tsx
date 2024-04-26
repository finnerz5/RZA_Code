import { MDBBtn, MDBCard, MDBCardImage, MDBCardOverlay, MDBCardText, MDBCardTitle, MDBIcon } from "mdb-react-ui-kit";
import IMG from "../assets/SocialMimg.jpg";
import "../CSS_pages/All.css"
import { Link } from "react-router-dom";
import insta from "../assets/instaIMG.png";

/* The `function Socialmedia()` is a functional component in React that defines the Socialmedia
component. This component returns JSX elements that make up the content of the social media page. It
includes a heading, a description, an image card with an overlay, and a link to an Instagram page.
The component uses MDBReactUIKit components for styling and layout. */
function Socialmedia(){

    return(
        <>  
        <i className="fab fa-instagram"></i>
            <div className="pt-5 socialM">
                <h1>Welcome to The social Media Page</h1>
                <h4>Below are links to our pages</h4>
                <MDBCard background='dark' className='text-white'>
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
                <MDBCardImage overlay src={IMG} alt='...' />
                <MDBCardOverlay>
                    <MDBCardTitle>Links</MDBCardTitle>
                    <Link to="https://www.instagram.com/riget_zoo_adventures/">
                        <div className="insta">
                            <img src={insta} width={100} height={100} className="mt-5" />
                        </div>
                    </Link>
                    
                </MDBCardOverlay>
                </MDBCard>
                
            </div>
            
        </>
    )
}

export default Socialmedia;