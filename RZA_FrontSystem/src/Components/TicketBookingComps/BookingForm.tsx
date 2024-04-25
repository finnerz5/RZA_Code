import { MDBContainer, MDBCard, MDBRow, MDBCol, MDBCardImage, MDBCardBody, MDBIcon, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import {  FormEvent, useState } from "react";
import logo from "../../assets/Logo.jpg";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Form from "react-bootstrap/esm/Form";
import {es} from "date-fns/locale/es";
import { useNavigate } from "react-router-dom";

/* The `function TicketForm(){` is defining a functional component in React called `TicketForm`. This
component is responsible for rendering a form for booking tickets. Inside the component, it
initializes several state variables using the `useState` hook to manage form inputs such as Name,
date, Message, Email, Mobile, Aticket, and Cticket. */
function TicketForm(){
    const [Name, setName ] = useState("")
    const [date, setDate] = useState(new Date());
    const [Message, setMessage] = useState("");
    const [, setAticket] = useState("");
    const [, setCticket] = useState("");
    const [Email, setEmail] = useState("");
    const [Mobile, setMobile] = useState("");

    const Atickets = ["1","2","3","4","5","6","7","8","9"]
    const Ctickets = ["1","2","3","4","5","6","7","8","9"]

    registerLocale('es', es);
    const navigate = useNavigate();

   /* The line `const [AticketOps, setAticketOps] = useState<any[]>([` is initializing a state variable
   named `AticketOps` using the `useState` hook in React. */
    const [AticketOps, setAticketOps] = useState<any[]>([
        <Form.Select
          className=""
          aria-label="Default select example"
          onChange={(e) => setAticket(e.target.value)}
        >
          <option>Select Adult Tickets</option>
          {Atickets.map((Aticket) => (
            <option value={Aticket}>{Aticket}</option>
          ))}
        </Form.Select>,
      ]);

      const [CticketOps, setCticketOps] = useState<any[]>([
        <Form.Select
          className=""
          aria-label="Default select example"
          onChange={(e) => setCticket(e.target.value)}
        >
          <option>Select kids tickets</option>
          {Ctickets.map((Cticket) => (
            <option value={Cticket}>{Cticket}</option>
          ))}
        </Form.Select>,
      ]);

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();
        setMessage("");

        /* The `try {` block in the code is used for error handling in JavaScript/TypeScript. Inside
        the `try` block, the code that might throw an error is placed. If an error occurs within the
        `try` block, the execution is immediately transferred to the `catch` block. */
        try {
            const Reply = await axios.post("http://localhost:5000/Booking", {
              Date: date,
              name: Name,
              aticket: AticketOps,
              cticket: CticketOps,
              email: Email,
              mobile: Mobile,

            });
            setMessage(JSON.stringify(Reply.data));
            if(Reply.data["success"]){
              navigate("/confirmation")
          }
          } catch (error) {
            if (axios.isAxiosError(error)) {
              setMessage(error.message);
            } else {
              setMessage(String(error));
            }
          }
    }

    return(
        <>
            <div className="form">
            <MDBContainer className="my-5">

                <MDBCard>
                <MDBRow className='g-0'>

                    <MDBCol md='6'>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
                    </MDBCol>

                    <MDBCol md='6'>
                    <MDBCardBody className='d-flex flex-column'>

                        <div className='d-flex flex-row mt-2'>
                        <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                        <span className="h1 fw-bold mb-0"><img src={logo} /></span>
                        </div>

                        <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px', textAlign: "center", fontSize: "50px"}}>book Tickets!</h5>    
                        
                        <MDBInput wrapperClass='mb-4' label='Name' id='formControlLg' type='text' size="lg" onChange={(e) => setName(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg" onChange={(e) => setEmail(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Mobile' id='formControlLg' type='phone' size="lg" onChange={(e) => setMobile(e.target.value)} />
                        {AticketOps}
                        <br/>
                        {CticketOps}
                        <br/>
                        <DatePicker isClearable className="w-50 text-center" selected={date} onChange={(date) => setDate(date)} />

                        <MDBBtn className="mb-4 mt-3 px-5" color='dark' size='lg' onClick={handleSubmit}>Book</MDBBtn>
                        {Message && <p>Response: {Message}</p>}
                        <div className='d-flex flex-row justify-content-start'>
                            <a href="#!" className="small text-muted me-1">Terms of use.</a>
                            <a href="#!" className="small text-muted">Privacy policy</a>
                        </div>

                    </MDBCardBody>
                    </MDBCol>

                </MDBRow>
                </MDBCard>

                </MDBContainer>
            </div>
        </>
    )
    
}

export default TicketForm;