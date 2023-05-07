import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Aboutus() {
    const navigate=useNavigate()
    
  return (
    <>
    <div class = "p2"><br></br>
      <h2><center>Project Developers</center></h2>
    </div>
    <div class="containero"> 
      <div class="boxl">
        <div class="imgBox">
          <img src="bharath.jpg" alt=""/>
        </div>
        <div class="content">
          <h2>Bharath Chandra<br></br> <span>Middle-Ware Developer</span> </h2> 
        </div> 
      </div>

      <div class="boxl">
        <div class="imgBox">
          <img src="rohanth1.jpg" alt=""/>
        </div>
        <div class="content">
          <h2>Rohanth Baipilla<br></br> <span>Front-End Developer</span> </h2> 
        </div> 
      </div>

      <div class="boxl">
        <div class="imgBox">
          <img src="rahul.jpg" alt=""/>
        </div>
        <div class="content">
          <h2>Rahul Chowdary<br></br> <span>Back-End Developer</span> </h2> 
        </div> 
      </div>
    </div><br></br><br></br>
    <center><button class="btn btn-warning btn-lg btn-block" onClick={()=>navigate("/")}>Back to Home Page</button></center>

    
    </>
  )
}
