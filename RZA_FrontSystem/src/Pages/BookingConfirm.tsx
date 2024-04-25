import thanks from "../assets/Thankyou.jpg"
import "../CSS_pages/All.css"

/* The `function Confirmation(){` is defining a React functional component named `Confirmation`. This
component returns JSX elements that display a confirmation message along with an image (loaded from
the `Thankyou.jpg` file) when rendered. The confirmation message includes text indicating that a
booking has been confirmed and expressing anticipation for the upcoming visit. */
function Confirmation(){
    return(
        <>
            <div className="ConfirmStyle">
                <img src={thanks}/>
            </div>

            <div className="ConfirmText pt-3">
                <h3>Your Booking has been Confirmed.</h3>
                <h4 className="pt-3">We look forward to seeing you!</h4>
            </div>
        </>
    )
}

export default Confirmation;