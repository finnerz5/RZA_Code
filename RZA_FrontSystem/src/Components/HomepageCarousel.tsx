import { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import room from "../assets/safari-room.jpg";
import visit from "../assets/education-visit.jpg";
import caravid from "../assets/CaraVid.mp4";

/* The `HPcarousel` function is a React functional component that creates a carousel for a homepage. It
uses the `Carousel` component from `react-bootstrap` to display a slideshow of images and a video.
The function also utilizes the `useContext` hook to access the theme context from
`styled-components`. The carousel includes images of hotel rooms, educational visits, and a video
showcasing wildlife at Riget Zoo Adventures. Each slide in the carousel contains a caption with a
title and description. */
function HPcarousel(){
    const themeContext = useContext(ThemeContext);

    return(
        <>
        <Carousel data-bs-theme={themeContext?.theme} className="">
            <Carousel.Item>
                <img className="d-block w-100" src={room} alt="First slide" width={315} height={630} />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
                <Carousel.Caption className="text-light " style={{width: "25rem"}}>
                    <h5>hotel rooms</h5>
                    <p>A quick preview of our wild safari themed hotel rooms.</p>
                </Carousel.Caption>
            </Carousel.Item>
        
            <Carousel.Item>
                <img className="d-block w-100" src={visit} alt="Second slide" width={315} height={630} />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
                <Carousel.Caption className="text-light text-xl-start">
                    <h5>Educational visits</h5>
                    <p>A sneak peak at one of our finest employees teaching children.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className="video-section">
                    <video style={{height:600,width:'101%'}} controls>
                        <source src={caravid} type="video/mp4"></source>
                    </video>
                </div>
                <Carousel.Caption>
                    <h3>What to see</h3>
                    <p>here at riget zoo adventures we have roaring amount of wildlife to see.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default HPcarousel;