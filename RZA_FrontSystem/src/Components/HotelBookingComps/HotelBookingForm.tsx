import {
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardBody,
  MDBIcon,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FormEvent, useState } from "react";
import logo from "../../assets/Logo.jpg";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Form from "react-bootstrap/esm/Form";
import { es } from "date-fns/locale/es";
import { useNavigate } from "react-router-dom";
import lizard from "../../assets/LizardZ00.jpg";

/* The `function HotelBooking(){` is defining a functional component named `HotelBooking` in React.
This component is responsible for rendering a form for booking hotel tickets. Within this function,
various state variables are initialized using the `useState` hook to manage form inputs such as
Name, date, Message, Aticket, Cticket, Email, and Mobile. */
function HotelBooking() {
  const [Name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [Message, setMessage] = useState("");
  const [, setAguests] = useState("");
  const [, setCguests] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");

  const Aguests = ["1", "2", "3", "4", "5"];
  const Cguests = ["1", "2", "3", "4", "5"];

  const weekend = (date) => new Date() < date;

  registerLocale("es", es);
  const navigate = useNavigate();

  /* The code snippet `const [AguestOps, setAguestOps] = useState(0);` and `const [CguestOps,
   setCguestOps] = useState(0);` is defining state variables `AguestOps` and `CguestOps` using the
   `useState` hook in React. */
  const [AguestOps, setAguestOps] = useState(0);

  const [CguestOps, setCguestOps] = useState(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage("");

    /* The `try {` block in the code is used for error handling in JavaScript/TypeScript. Inside
        the `try` block, the code that might throw an error is placed. If an error occurs within the
        `try` block, the execution is immediately transferred to the `catch` block. */
    try {
      const Reply = await axios.post("http://localhost:5000/HotelBookings", {
        startdate: startDate,
        enddate: endDate,
        name: Name,
        aguest: AguestOps,
        cguest: CguestOps,
        email: Email,
        mobile: Mobile,
      });
      setMessage(JSON.stringify(Reply.data));
      if (Reply.data["Hotel Booked"]) {
        navigate("/confirm");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(error.message);
      } else {
        setMessage(String(error));
      }
    }
  };

  return (
    <>
      <div className="form">
        <MDBContainer className="my-5">
          <MDBCard>
            <MDBRow className="g-0">
              <MDBCol md="6">
                <MDBCardImage
                  src={lizard}
                  alt="login form"
                  className=" pt-5 rounded-start w-100"
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBCardBody className="d-flex flex-column">
                  <div className="d-flex flex-row mt-2">
                    <MDBIcon
                      fas
                      icon="cubes fa-3x me-3"
                      style={{ color: "#ff6219" }}
                    />
                    <span className="h1 fw-bold mb-0">
                      <img src={logo} />
                    </span>
                  </div>

                  <h5
                    className="fw-normal my-4 pb-3"
                    style={{
                      letterSpacing: "1px",
                      textAlign: "center",
                      fontSize: "50px",
                    }}
                  >
                    book Your stay!
                  </h5>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Name"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Mobile"
                    id="formControlLg"
                    type="phone"
                    size="lg"
                    onChange={(e) => setMobile(e.target.value)}
                  />

                  <Form.Select
                    className=""
                    aria-label="Default select example"
                    onChange={(e) => setAguestOps(Number(e.target.value))}
                  >
                    <option>Select Adult Tickets</option>
                    {Aguests.map((Aguest) => (
                      <option value={Aguest}>{Aguest}</option>
                    ))}
                  </Form.Select>

                  <br />

                  <Form.Select
                    className=""
                    aria-label="Default select example"
                    onChange={(e) => setCguestOps(Number(e.target.value))}
                  >
                    <option>Select kids tickets</option>
                    {Cguests.map((Cguest) => (
                      <option value={Cguest}>{Cguest}</option>
                    ))}
                  </Form.Select>

                  <br />
                  <h5 className="text-center">select dates of stay</h5>
                  <div>
                    <DatePicker
                      className="w-50 mx-5"
                      selectsStart
                      filterDate={weekend}
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      startDate={startDate}
                    />
                    <DatePicker
                      selectsEnd
                      filterDate={weekend}
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      endDate={endDate}
                      startDate={startDate}
                      minDate={startDate}
                    />
                  </div>

                  <MDBBtn
                    className="mb-4 mt-3 px-5"
                    color="dark"
                    size="lg"
                    onClick={handleSubmit}
                  >
                    Book
                  </MDBBtn>
                  {Message && <p>Response: {Message}</p>}
                  <div className="d-flex flex-row justify-content-start">
                    <a href="#!" className="small text-muted me-1">
                      Terms of use.
                    </a>
                    <a href="#!" className="small text-muted">
                      Privacy policy
                    </a>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </div>
    </>
  );
}

export default HotelBooking;
