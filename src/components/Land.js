import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Land() {
  const navigate=useNavigate()

  return (
    <>
    <div class="text">
      <center><h2><u>Land</u>&nbsp;<u>Estate</u> </h2></center>
    </div>
    <div class="p2">
      <h5>This is one of the least expensive and most secure real estate properties in India. When you buy a piece of land for investment, you need not worry about theft, damage, and maintenance, which is off course great. But at the same time, generating passive income from investment in land requires some out-of-the-box ideas, which might not work necessarily. However, still, it’s good to invest in it because it could pay off handsomely in the future.

However, there is a disadvantage to it as well i.e., loans will be charged at more interest rates than a home loan. Moreover, you won’t be saving any taxes on repayment of the principal amount.</h5>
    </div><br></br><br></br>
    <div class="p2">
      <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;According to Indian Cultural and psychology, Most of the people used to purchase the land on basis of their belief on "VASTHU". As our project is truly based on the Indian Cultural on their needs to buy the Estate based on the VASTHU</h5><br></br>
         </div>
         <center>
    <div class="gallery">
  <a target="_blank" href="landpic1.jpg">
    <img src="landpic1.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Trinath <br></br>Mail:vanjarapu@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Land is 18-Lakhs\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="landpic2.jpg">
    <img src="landpic2.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Khadeer <br></br>Mail:khadeer@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 20-Lakhs\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="landpic3.jpg">
    <img src="landpic3.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Naval <br></br>Mail:naval@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 20-Lakhs\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>  

<div class="gallery">
  <a target="_blank" href="landpic4.jpg">
    <img src="landpic4.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Jaya Prakash <br></br>Mail:jprakash@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 25-Lakhs\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div></center>
<div class="gallery">
  <a target="_blank" href="landpic5.jpg">
    <img src="landpic5.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Koundinya <br></br>Mail:kundanya@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 27-Lakhs\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="landpic6.jpg">
    <img src="landpic6.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Neeraj <br></br>Mail:neeraj@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 16-Lakhs\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="landpic7.jpg">
    <img src="landpic7.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Shannu <br></br>Mail:Shannu@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Building is 19-Lakhs\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>  

<div class="gallery">
  <a target="_blank" href="landpic8.jpg">
    <img src="landpic8.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Seller : Mr. Jonathan <br></br>Mail:Jonathon@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>(alert("Cost of the Land is 20-Lakhs\nFor More Details Contact us..."), navigate("/payment"))}>BUY ESTATE</button></center><br></br>
  </div></center>
</div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br>

    <center>
    <div> <br></br>     
      <button type="button" class="btn btn-warning btn-lg btn-block btn-sm" onClick={()=>navigate("/residential")}><b>Go to Residential</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" class="btn btn-warning btn-lg btn-block btn-sm" onClick={()=>navigate("/commercial")}><b>Go to Commercial</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" class="btn btn-warning btn-lg btn-block btn-sm" onClick={()=>navigate("/industrial")}><b>Go to Industrial</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    </center>
    <div>
    <br></br><br></br><br></br><br></br><br></br>

    </div>

    </>
    
  )
}
