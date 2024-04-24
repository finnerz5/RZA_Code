import axios from "axios";
import { MDBContainer, MDBCard, MDBRow, MDBCol, MDBCardImage, MDBCardBody, MDBIcon, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useContext, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AccountCredentialsContext } from "./AccountProvider";
import Logo from "../../assets/Logo.jpg";

function LoginF(){
    const accountCredentialsContext = useContext(AccountCredentialsContext)
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [Message, setMessage] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      setMessage("");
  
  
        try{
        const Reply = await axios.post("http://localhost:5000/Login", {
        username: UserName,
        password: Password,
        
      });
        setMessage(JSON.stringify(Reply.data));
        if(Reply.data["success"]){
            accountCredentialsContext?.setAccountCredentials({username: UserName, password: Password})
            navigate("/account")
        }
        }catch (error) {
            if(axios.isAxiosError(error)) {
                setMessage(error.message);
            } else {
                setMessage(String(error));
            }
        }
    };
  
    return (
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
                  <span className="h1 fw-bold mb-0"><img src={Logo} /></span>
                </div>
  
                <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Login to your account</h5>    
                  
                  <MDBInput wrapperClass='mb-4' label='UserName' id='formControlLg' type='text' size="lg" onChange={(e) => setUserName(e.target.value)} />
                  <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} />
  
                <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleSubmit}>Login</MDBBtn>
                <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Havent got an account? <a href="/signup" style={{color: '#393f81'}}> SignUp here</a></p>
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
    )
  }
  
  export default LoginF;