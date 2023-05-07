import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Bidding() {
    const navigate = useNavigate()
  return (
    <>
    <div className='p2'>
        <center><h2>Bidding System</h2>
        <img src="bid.jpg"/></center>
        <h4>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Here we are conducting a bidding system for the people who want to buy the same house.So we will conduct a bidding system and give the house to the highest bidder who bids the highest price. </h4>
        <center><img src="bid-2.png"/></center>
        
  </div>
  <div class>
    
   
    <table>
        
        <tr>
            <td><center>1</center></td>
            <td><center>rohanth	</center></td>
            <td><center>house near jubliehills
</center></td>
<td><center>House is in the bidding system</center></td>
        </tr>

        <tr>
            <td><center>2</center></td>
            <td><center>rahul	</center></td>
            <td><center>house near jubliehills
</center></td>
<td><center>House is in the bidding system</center></td>
        </tr>
        <tr>
            <td><center>3</center></td>
            <td><center>bharath	</center></td>
            <td><center>house near jubliehills
</center></td>
<td><center>House is in the bidding system</center></td>
        </tr>
        
    </table>
    </div><br></br>
    <center><div className='p2'>
      <img src="bid-1.png"/><br></br>
      <h4>Here are the three steps of the bidding system.</h4>
      <h4>1.Announcement- we will check and we will keep a bidding system among the people who wants to buy the same house</h4>
      <h4>2.Conducting teh bidding system and checks who will pay more money in the bidding system</h4>
      <h4>3.Giving house to the highest bidder who bids in the bidding system.</h4>
      

    </div></center>
    <br></br><div>
      <center><button type="button" class="btn btn-warning btn-lg btn-block btn-sm" onClick={()=>navigate("/admin")}><b>Go to Admin Page</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</center>
      </div>
    </>
  )
}
