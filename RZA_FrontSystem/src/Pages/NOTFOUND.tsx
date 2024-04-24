import "../CSS_pages/All.css";
import sadlion from "../assets/404-lion.gif"

/* The `function NotFound(){` is defining a functional component in React called `NotFound`. This
component returns JSX elements that represent the content to be displayed when a 404 error occurs,
indicating that the requested resource was not found. The component includes a heading "404 NOT
FOUND !!" and an image sourced from the `sadlion` file. */

function NotFound(){
    return(
        <>
            <div className="Error">
                <h1>404 NOT FOUND !!</h1>
                <img src={sadlion} alt="gif" />

            </div>
        </>
    )
}

export default NotFound;