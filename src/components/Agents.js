import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function Agents() {
  const navigate=useNavigate()
  return (
    <>
    <div class="p2"><br></br>
      <center><h3>Hello , Customer !!</h3></center>
    </div>
        <br></br><br></br>
        <center>
    <div class="gallery">
  <a target="_blank" href="agent1.jpg">
    <img src="agent1.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Agent  : Mr. Trinath <br></br><br></br>Mail:vanjarapu@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>navigate("/contact")}>CONTACT</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="agent2.jpg">
    <img src="agent2.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Agent  : Mr. Khadeer <br></br><br></br>Mail:khadeer@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>navigate("/contact")}>CONTACT</button></center><br></br>
  </div></center>
</div>

<div class="gallery">
  <a target="_blank" href="agent3.jpg">
    <img src="agent3.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Agent  : Mr. Naval <br></br><br></br>Mail:naval@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>navigate("/contact")}>CONTACT</button></center><br></br>
  </div></center>
</div>  

<div class="gallery">
  <a target="_blank" href="agent4.jpg">
    <img src="agent4.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <center><div class="p1"><h5>Agent  : Mrs. Meghana <br></br><br></br>Mail:meghana@gmail.com<br></br></h5>
  <br></br><center><button type="button" class="btn btn-primary" onClick={()=>navigate("/payment")}>CONTACT</button></center><br></br>
  </div></center>
</div></center>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br>

    <center></center>
        
  </>
    
  )
}
