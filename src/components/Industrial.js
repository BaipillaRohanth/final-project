import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function Industrial() {
  const navigate=useNavigate()
  return (
    <>
    <div class="text">
      <center><h2><u>Industrial</u>&nbsp;<u>Estate</u></h2></center>
    </div>
    <div class="p2">
      <h5>Industrial Estates | Meaning, Objectives, Merits, Types, Role

 Meaning and Definition of Industrial Estate
Industrial estate is one, which consists of well-constructed factories that are offered to entrepreneur for establishing an enterprise. It is normally established in the industrially backward areas so as to minimize the regional imbalances. It provides all infrastructural facilities such as power, transport, water and lighting at a reasonable cost.

The main objective of establishing Industrial estates is to attract industries to industrially backward areas, which will make the country a regionally well-balanced one.</h5>
    <br></br><br></br>
    <h6>      <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;According to Indian Cultural and psychology, Most of the people used to purchase the Commercial on basis of their belief on "VASTHU". As our project is truly based on the Indian Cultural on their needs to buy the Estate based on the VASTHU</h5><br></br>
</h6></div>
<br></br><br></br>
<div class="gallery">
  <a target="_blank" href="industrialpic1.jpg">
    <img src="industrialpic1.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Trinath <br></br>Mail:vanjarapu@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>navigate("/payment")}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="industrialpic2.jpg">
    <img src="industrialpic2.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Khadeer <br></br>Mail:khadeer@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>navigate("/payment")}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="industrialpic3.jpg">
    <img src="industrialpic3.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Naval <br></br>Mail:naval@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>navigate("/payment")}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>  

<div class="gallery">
  <a target="_blank" href="industrialpic4.jpg">
    <img src="industrialpic4.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Jaya Prakash <br></br>Mail:jprakash@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>navigate("/payment")}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="industrialpic5.jpg">
    <img src="industrialpic5.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Shannu <br></br>Mail:Shannu@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>navigate("/payment")}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="industrialpic6.jpg">
    <img src="industrialpic6.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Jonathan <br></br>Mail:Jonathon@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>navigate("/payment")}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="industrialpic7.jpg">
    <img src="industrialpic7.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Koundinya <br></br>Mail:kundanya@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>navigate("/payment")}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>  

<div class="gallery">
  <a target="_blank" href="industrialpic8.jpg">
    <img src="industrialpic8.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Neeraj <br></br>Mail:neeraj@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>navigate("/payment")}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<center>
    <div>
      <button type="button" class="btn btn-warning btn-lg btn-block btn-sm" onClick={()=>navigate("/land")}><b>Go to Land</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" class="btn btn-warning btn-lg btn-block btn-sm" onClick={()=>navigate("/residential")}><b>Go to Residential</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" class="btn btn-warning btn-lg btn-block btn-sm" onClick={()=>navigate("/commercial")}><b>Go to Commercial</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    </center>
    <br></br><br></br><br></br><br></br><br></br>

    </>
    
  )
}
