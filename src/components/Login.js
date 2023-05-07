import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()
  const [em,setEm] = useState("")
  const [pa,setPa] = useState("")
  const handleSubmit = async(event) => {
    event.preventDefault();
    await axios.get(`http://localhost:5000/login/${em}/${pa}`,{
    }).then((response)=>{
      if(em==="admin@gmail.com"){
        navigate("/admin")
      }
      else if(response.data==="found"){
        navigate("/home")
      }
      else{
        alert("Invalid Credentials\nCheck whether you are entered correct credientials :(")
      }
     })
  };
  
  const handleChange = (e) =>{
    setEm(e.target.value)
  }
  const handleChange1 = (e) =>{
    setPa(e.target.value)
  }

  return (
    <>
    <div id="main" class="main-container">
<div class="box">
  <div class="p2">
  <h2>login</h2>

  </div>
  <form onSubmit={handleSubmit}>
    <div class="input-box">
      <input id="user-name" type="text" name="email" onChange={handleChange} required/>
      <label>Email</label>
    </div>
    <div class="input-box">
      <input id="user-pass" type="password" name="password" onChange={handleChange1} required/>
      <label>Password</label>
    </div>
    <center><input id="submit" type="submit" name="" value="Submit"/></center>
  </form><br></br><br></br>
  <div class="p2"><p><center>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't Have Account ?</center></p><br></br><br></br></div>
  <div class="p2"><p><a href="#"onClick={()=>(navigate("/register"))}><center>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Register</b></center></a></p><br></br><br></br></div>
</div>
</div>

{/* <div id="logged-in">
</div>
    <div class="p2"><br></br>    <br></br><br></br><br></br><br></br><br></br>

      {/* <center><h2>Login Page is still in Development... :)</h2></center> 
    </div> */}
    </>
    
  )
}
