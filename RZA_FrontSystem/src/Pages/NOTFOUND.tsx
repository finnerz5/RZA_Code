import "./All.css";
import sadlion from "../assets/404-lion.gif"

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