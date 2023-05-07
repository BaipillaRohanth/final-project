import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function ConfirmPayment() {
    const navigate=useNavigate()
   
  return (
    <>
    <center><div class="p1"><br></br><br></br><br></br><br></br>
      <h4>Before Proceed to Payment of Estate once confirm or talk to the Estate Owner !!! </h4><br></br>
      <h6><b><u>NOTE</u></b>: Payment on your own risk</h6><br></br>
    </div>
    <button class="btn btn-warning btn-lg btn-block" onClick={()=>(alert("Loading...!!!"),navigate("/receipt"))}>Continue payment</button></center>
    </>

    
  )
}
