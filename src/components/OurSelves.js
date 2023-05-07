import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function OurSelves() {
    const navigate=useNavigate()
  return (
    <><br>  </br>
    <center><h2 class='p2'><b>Project Developers</b></h2></center>
    <div class="container">
      <div class="boxe">
        <div class="imgBox">
          <img
          src="bharath.jpg" alt=""/>
        </div>
        <div class="content">
          <h2>Bharath Chandra<br></br>  <span> Middle-Ware Developer</span></h2> 
        </div> 
      </div>
      <div class="boxe">
        <div class="imgBox">
          <img
          src="rohanth.jpg" alt=""/>
        </div>
        <div class="content">
          <h2>Rohanth Baipilla<br></br>  <span> Front-End Developer</span></h2> 
        </div> 
      </div>
      <div class="boxe">
        <div class="imgBox">
          <img
          src="rahul.jpg" alt=""/>
        </div>
        <div class="content">
          <h2>Rahul Chowdary<br></br>  <span> Back-End Developer</span></h2> 
        </div> 
      </div>
    </div>
    

      
    
    <div class="p2">
    <center><button class="btn btn-warning btn-lg btn-block" onClick={()=>(navigate("/"),alert("Navigating...."))}>Back to Home</button></center>
    </div>
    <br></br><br></br><br></br>
    </>
  )
}
