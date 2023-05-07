import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function Commercial() {
  const navigate=useNavigate()
  
  return (
    <>
    <div class="text">
      <center><h2><u>Commercial</u>&nbsp;<u>Estate</u></h2></center>
    </div>
    <div class="p2">
      <h5>Shopping centres, restaurants, schools, hospitals, and office spaces all are some examples of commercial properties that we’re probably familiar with. Investing in them is more expensive as compared to residential properties, but the chances of profit generation are better too. However, if you are a newbie investor, it might be difficult to choose the right property for investment. And, to remain safe, you must seek the guidance of a real estate investor. Arranging for a down payment is another area of concern in this type of investment because most Indian banks provide about 50% to 70% of the cost as loan. Also, unlike a housing loan, one taken for a commercial investment requires a mortgage.</h5>
    <br></br><br></br>
    <h6>      <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;According to Indian Cultural and psychology, Most of the people used to purchase the Commercial on basis of their belief on "VASTHU". As our project is truly based on the Indian Cultural on their needs to buy the Estate based on the VASTHU</h5><br></br>
</h6></div>
<br></br><br></br>
<div class="gallery">
  <a target="_blank" href="commercialpic1.jpg">
    <img src="commercialpic1.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Jaya Prakash <br></br>Mail:jprakash@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 21-Crores\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="commercialpic2.jpg">
    <img src="commercialpic2.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Trinath <br></br>Mail:vanjarapu@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 15-Crores\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="commercialpic3.jpg">
    <img src="commercialpic3.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Khadeer <br></br>Mail:khadeer@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 22-Crores\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>  

<div class="gallery">
  <a target="_blank" href="commercialpic4.jpg">
    <img src="commercialpic4.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Naval <br></br>Mail:naval@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 23-Crores\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>
Crores
<div class="gallery">
  <a target="_blank" href="commercialpic5.jpg">
    <img src="commercialpic5.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Neeraj <br></br>Mail:neeraj@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 35-Crores\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="commercialpic6.jpg">
    <img src="commercialpic6.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Jonathan <br></br>Mail:Jonathon@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 39-Crores\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="commercialpic7.jpg">
    <img src="commercialpic7.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Koundinya <br></br>Mail:kundanya@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 38-Crores\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>  

<div class="gallery">
  <a target="_blank" href="commercialpic8.jpg">
    <img src="commercialpic8.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Shannu <br></br>Mail:Shannu@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 53-Crores\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<center>
    <div>
      <button type="button" class="btn btn-warning btn-lg btn-block btn-sm" onClick={()=>navigate("/land")}><b>Go to Land</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" class="btn btn-warning btn-lg btn-block btn-sm" onClick={()=>navigate("/residential")}><b>Go to Residential</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" class="btn btn-warning btn-lg btn-block btn-sm" onClick={()=>navigate("/industrial")}><b>Go to Industrial</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    </center>
    <br></br><br></br><br></br><br></br><br></br>

    </>
    
  )
}
