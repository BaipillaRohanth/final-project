import React from 'react'

export default function Receipt() {
  return (
    <><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div class="receipt">
        <h2 class="name"> <b>RECEIPT</b> </h2><br></br>
<h2 class="name"> <b>REMS</b> Website</h2>

<h6 class="greeting"> Thank you for Buying from our Estate ! </h6>

<div class="order">

  {/* <p> Order No : 1234567890 </p>
  <p> Date : 4/5/2020 </p>
  <p> Shipping Address : My sweet home </p> */}

</div>

<hr/>


<div class="details">

  <h3> Details </h3>

  <div class="product">

    { <img src="https://www.pngimages.in/uploads/png-webp/2022/2022-September/House_Png_Image_Editing.webp"alt=""/> }

    <div class="info">
<br></br><br></br>
      <h6> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date : {Date.now}<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Day : Sunday<br></br> </h6>

      {/* <p> Color: Mercine </p>
      <p> Qty: 1 </p> */}
    <br></br>
    </div>

  </div>

  {/* <p> 128 &dollar; </p> */}

</div>

<div class="totalprice">

  <h5 class="sub"> Subtotal <span> 18 Lakhs </span></h5>

  <h5 class="del"> Tax(GST) <span> 5,000 </span> </h5><br></br>

  <hr/><br></br>

  <h5 class="tot"> Total <span> 18 Lakhs & 5000 </span> </h5>

</div>



</div>
    </>
  )
}
