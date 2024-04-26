import "../../CSS_pages/All.css";
import aqua from "../../assets/aquariumZoo.jpg";

function HotelInfo(){
    return(
        <>
        <div className="circle-shape-example">
            <img src={aqua} alt="A photograph of an aquarium" className="circle-shape-curve"/> 
            <h1>Some Info</h1>
      
            <p className="circle-shape-para px-5 ">
                Riget Zoo Adventures Hotel first opened in january of 2017. We saw the great benefit having a hotel had,
                it would make the zoo experience more enjoyable to be able to kick back and relax after a long day.
                Our aim was to make the hotel affordable so that everyone can enjoy the experience.
                All our rooms are safari themed meaning you have to pay no extra to partake.
            </p>
        </div>
        </>
    )

}

export default HotelInfo;