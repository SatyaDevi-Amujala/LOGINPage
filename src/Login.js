import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "./UserAuthContext";
import ReCAPTCHA from 'react-google-recaptcha';
import fimg from "./face.jpg";
import timg from "./twit.jpg";
import gimg from "./g.png";


const Login = () => {
  const [email, setEmail] = useState("");
  const [recapt, setRecapt] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { glogIn, googleSignIn } = useUserAuth();
  const { flogIn, facebookSignIn } = useUserAuth();
  const { tlogIn, twitterSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    console.log("reca:",recapt);
    {recapt==="" ? alert("Complete recaptcha process") :
   
    fun();}}
    const fun = async (e) => {
      
    setError("");
    try {
     await glogIn(email, password);
      navigate("/home");
      
    } catch (err) {
      setError(err.message);
    }
    
    try {
      await flogIn(email, password);
       navigate("/home");
        
      } catch (err) {
        setError(err.message);
     }
     try {
      await tlogIn(email, password);
       navigate("/home");
        
      } catch (err) {
        setError(err.message);
     }};
   
  const recap =(value) => {
    console.log("Recap:",value);
    setRecapt(value);
    
  }
  
  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
   }
  };
 
  const signInWithFacebook = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  const signInWithTwitter = async (e) => {
    e.preventDefault();
    try {
      await twitterSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
  <div>
        
        <div class="split right">
        <center><h2 style={{padding:"30px"}}className="mb-3">Login</h2>
        </center>
        
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
    <div style={{color:"blue",textAlign:"right",marginBottom:"20px"}}> <p>forgot password? </p></div>
    <div style={{margin:"20px"}}>
      <ReCAPTCHA
      sitekey="6LcyiyQmAAAAANGaNtzCzDQkV21LdKEhdYI8Qfim"
      onChange={recap}
     
      
      />
    </div>
          <center><div  className="d-grid gap-2">
           <Button  varient="primary" type="Submit">
              Log In
            </Button>
          </div></center>
        </Form>
        <hr />
       <center> <p>Or Sign UP Using</p></center>
       <center>
        <div>
          <img class="image" src={fimg}  alt="Facebook"
            onClick={signInWithFacebook}
          />
          <img class="image" src={timg}  alt="Twitter"
            onClick={signInWithTwitter}
          />
          <img class="image" src={gimg}  alt="Google"
            onClick={signInWithGoogle}
          />
        </div></center>
     
      <div className="p-4 box mt-3 text-center">
        Or Click On <Link  style={{color:"red"}}to="/signup">Sign UP</Link>
      </div> </div>
      </div>
    </>
  );
};

export default Login;