import './App.css';
import {auth} from './firebase';
import React,{useState} from 'react';
import img1 from './img2.png';
import img2 from './img3.png';
import img3 from './face.jpg';
import img4 from './twit.jpg';
import img5 from './g.png';

function App() {
  const [data,setData]=useState({
    email:"",
    password:"",
  })
  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value});
  }
  const submitHandler = e =>{
    e.preventDefault();
  
  }
  return (
    
      <div>
     
      <div style={{backgroundColor:"white",padding:"20px",float:"right",marginLeft:"700px",marginRight:"200px",marginTop:"30px",borderRadius:"5px",width:"350px",height:"599px"}}>

        <h2 style={{textAlign:"center"}}>Login</h2>
        <form onSubmit={submitHandler}>
          <div>
          <p style={{marginLeft:"20px",marginTop:"60px"}}>username</p>
     <div style={{marginTop:"20px",marginLeft:"20px",borderBottom:"2px solid black",height:"35px"}}>    
    <div style={{width:"8%",float:"left"}}><img src={img1} height="20px" width="25px" alt="loginimage"></img></div>
   
    <div style={{width:"80%",marginRight:"30px",float:"right"}}> <input style={{border:"none",outline:"none"}} type="email"  placeholder="enter mail" name="email" value={data.email} onChange={changeHandler}/>
    </div> </div>
    
 </div>
 <div>
          <p style={{marginLeft:"20px",marginTop:"30px"}}>password</p>
     <div style={{marginTop:"20px",marginLeft:"20px",borderBottom:"2px solid silver",height:"35px"}}>    
    <div style={{width:"8%",float:"left"}}><img src={img2} height="20px" width="25px" alt="loginimage"></img></div>
   
    <div style={{width:"80%",marginRight:"30px",float:"right"}}> <input style={{border:"none",outline:"none"}} type="password"  placeholder="enter your password" name="password" value={data.password} onChange={changeHandler}/>
    </div> </div>
    
 </div>
 <div style={{width:"40%",float:"right",color:"blue"}}><p>forgot password?</p></div>
 <div ><button class="button"><submit>Login</submit></button></div>
 </form>
 
         
    <div class="signup"><p>Or Sign Up Using</p></div> 
    <center ><div >
      <img style={{padding:"5px"}} src={img3} height="30px" width="45px" alt="facebook"></img>
      <img style={{padding:"5px"}}src={img4} height="30px" width="35px" alt="twitter"></img>
      <img style={{padding:"5px"}}src={img5} height="30px" width="30px" alt="google"></img>
      </div></center> </div> 
        </div>

      
     

  );
}

export default App;
