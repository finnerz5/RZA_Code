import axios from "axios";
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
import { useState, FormEvent } from "react";
import Logo from "../assets/Logo.jpg";

/* The `function SignUpF(){` is defining a functional component in TypeScript with React. This
component represents a sign-up form for users to create an account. Within this function component,
state variables are declared using the `useState` hook to manage the form input values such as
username, password, confirm password, first name, last name, email, and date of birth. */
function SignUpF() {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Confirm, setConfirm] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [DOB, setDOB] = useState("");
  const [Message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const Reply = await axios.post("http://localhost:5000/SignUp", {
        username: UserName,
        password: Password,
        confirm: Confirm,
        fname: Fname,
        lname: Lname,
        email: Email,
        mobile: Mobile,
        dob: DOB,
      });
      setMessage(JSON.stringify(Reply.data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(error.message);
      } else {
        setMessage(String(error));
      }
    }
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
              alt="login form"
              className="rounded-start w-100"
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
                  <img src={Logo} />
                </span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Create your account
              </h5>

              <MDBInput
                wrapperClass="mb-4"
                label="First Name"
                id="formControlLg"
                type="text"
                size="lg"
                onChange={(e) => setFname(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Last Name"
                id="formControlLg"
                type="text"
                size="lg"
                onChange={(e) => setLname(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Date of Birth"
                id="formControlLg"
                type="string"
                size="lg"
                onChange={(e) => setDOB(e.target.value)}
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
                label="mobile"
                id="formControlLg"
                type="mobile"
                size="lg"
                onChange={(e) => setMobile(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="UserName"
                id="formControlLg"
                type="text"
                size="lg"
                onChange={(e) => setUserName(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Confirm Password"
                id="formControlLg"
                type="password"
                size="lg"
                onChange={(e) => setConfirm(e.target.value)}
              />

              <MDBBtn
                className="mb-4 px-5"
                color="dark"
                size="lg"
                onClick={handleSubmit}
              >
                Sign Up
              </MDBBtn>
              <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Already got an account?{" "}
                <a href="/login" style={{ color: "#393f81" }}>
                  Login here
                </a>
              </p>
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
  );
}

export default SignUpF;
