import React from 'react'
import {useNavigate} from 'react-router-dom';
// import {Link} from 'react-router-dom'
export default function Residential() {
  const navigate=useNavigate()
  return (
    <>
    <div class="text">
      <center><h2><u>Residential</u>&nbsp;<u>Estate</u></h2></center>
    </div>
    <div class="p2">
      <h5>Apartments, single-family houses, multi-family homes, villas, townships, and condos all come under this category. Each of these options presents different prospects from an investment point of view. For example, the prices of well-built villas and independent houses increase over time because of the rising value of land and longevity of the building. But contrary to this, the price of apartments might not witness quality appreciation after 10-15 years of use. Thus, they need to be sold within the next five to 7 years.</h5>
    <br></br><br></br>
    <h6>      <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;According to Indian Cultural and psychology, Most of the people used to purchase the Houses on bass of their belief on "VASTHU". As our project is truly based on the Indian Cultural on their needs to buy the Estate based on the VASTHU</h5><br></br>
</h6></div>
   
    <div class="gallery">
  <a target="_blank" href="residentialpic2.jpg">
    <img src="residentialpic2.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Trinath <br></br>Mail:vanjarapu@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 2-Crores"), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="residentialpic1.jpg">
    <img src="residentialpic1.jpg" alt="Cinque Terre" width="400" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Khadeer <br></br>Mail:khadeer@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 2-Crores"), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="residentialpic3.jpg">
    <img src="residentialpic3.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Naval <br></br>Mail:naval@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 1.5-Crores"), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="residentialpic4.jpg">
    <img src="residentialpic4.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Jaya Prakash <br></br>Mail:jprakash@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 2.5-Crores"), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
  
</div>

<div class="gallery">
  <a target="_blank" href="residentialpic5.jpg">
    <img src="residentialpic5.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Jonathan <br></br>Mail:Jonathon@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 3-Crores"), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
  
</div>

<div class="gallery">
  <a target="_blank" href="residentialpic6.jpg">
    <img src="residentialpic6.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Shannu <br></br>Mail:Shannu@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 4-Crores"), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
  
</div>

<div class="gallery">
  <a target="_blank" href="residentialpic7.jpg">
    <img src="residentialpic7.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Koundinya <br></br>Mail:kundanya@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 5.2-Crores"), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
  
</div>

<div class="gallery">
  <a target="_blank" href="residentialpic8.jpg">
    <img src="residentialpic8.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Neeraj <br></br>Mail:neeraj@gmail.com<br></br><br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 2.2-Crores"), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
  
</div>


<br></br>

<center>
    <div>
      <button type="button" class="btn btn-warning btn-lg btn-block btn-sm" onClick={()=>navigate("/land")}><b>Go to Land</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" class="btn btn-warning btn-lg btn-block btn-sm" onClick={()=>navigate("/commercial")}><b>Go to Commercial</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" class="btn btn-warning btn-lg btn-block btn-sm" onClick={()=>navigate("/industrial")}><b>Go to Industrial</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    </center>
    <br></br><br></br><br></br><br></br><br></br>


    </>

    
  )
}


