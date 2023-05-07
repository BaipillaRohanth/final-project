import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Admin() {
  const navigate = useNavigate()

  return (
    <>
    <div className='p2'>
        <div class="dashboard">
  <center><h1>Admin Dashboard         &nbsp;&nbsp;<button class="btn btn-outline-success"onClick={()=>navigate("/")}>Logout</button>
</h1></center>
  <h2>Admin DashBoard Graph-REMS</h2>
  <img src="chart.png"/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  <img src="map.png"/>
  <div>
    <h2>Users</h2>
    <table>
      <thead>
        
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Smith</td>
          { <img src="https://c1.wallpaperflare.com/preview/601/644/46/new-home-house-construction-estate.jpg"alt=""/> }
          <td>johnsmith@gmail.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Doe</td>
          { <img src="https://c0.wallpaperflare.com/preview/856/367/784/various-home-house-houses.jpg"alt=""/> }

          <td>janedoe@gmail.com.com</td>
        </tr>
        <tr>
          <td>3</td>
          <td> daniel</td>
          { <img src="https://c0.wallpaperflare.com/preview/108/456/1011/white-and-brown-concrete-building.jpg"alt=""/> }
          <td>daniel@gmail.com</td>
        </tr>
        <tr>
          <td>4</td>
          <td> bharath</td>
          { <img src="https://www.niesvlagos.org/en/wp-content/uploads/2023/03/Red-Black-Business-Daily-News-Instagram-Post-1200-%C3%97-800px-910x607.jpg"alt=""/> }
          <td>bharath@gmail.com</td>
        </tr>
        <tr>
          <td>5</td>
          <td>John willy</td>
          { <img src="https://abandonedrelics.files.wordpress.com/2017/01/frontier-town-motel.jpg"alt=""/> }
          <td>willy@gmail.com</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="section">
   
    <table>
        <tr>
            <td><center>1</center></td>
            <td><center>Trinadh</center></td>
            <td><center> house near guntur
</center></td>
<td><center>House has been sold</center></td>
        </tr>
        <tr>
            <td><center>2</center></td>
            <td><center>Vamsi</center></td>
            <td><center>house near vijayawada
</center></td>
<td><center>House has been sold</center></td>
        </tr>
        <tr>
            <td><center>3</center></td>
            <td><center>Bharath</center></td>
            <td><center>house near srikakulam
</center></td>
<td><center>House has been sold</center></td>
        </tr>
        <tr>
            <td><center>4</center></td>
            <td><center>nayeem</center></td>
            <td><center>house near 1 town
</center></td>
<td><center>House has been sold</center></td>
        </tr>
        <tr>
            <td><center>5</center></td>
            <td><center>shanmukh	</center></td>
            <td><center>house near two town
</center></td>
<td><center>House has been sold</center></td>
        </tr>
        <tr>
            <td><center>6</center></td>
            <td><center>naval	</center></td>
            <td><center>house near eluru
</center></td>
<td><center>House has been sold</center></td>
        </tr>
        <tr>
            <td><center>7</center></td>
            <td><center>akhil	</center></td>
            <td><center>house near haryana
</center></td>
<td><center>House has been sold</center></td>
        </tr>
        <tr>
            <td><center>8</center></td>
            <td><center>Nitesh</center></td>
            <td><center>house near pondugal
</center></td>
<td><center>House has been sold</center></td>
        </tr>
        <tr>
            <td><center>9</center></td>
            <td><center>tarun</center></td>
            <td><center>house near tirupathi</center></td>
            <td><center>House has been sold</center></td>
        </tr>
        
        <tr>
            <td><center>10</center></td>
            <td><center>vijay	</center></td>
            <td><center>house near pedhan
</center></td>
<td><center>House has been sold</center></td>
        </tr>
        <tr>
            <td><center>11</center></td>
            <td><center>khadeer</center></td>
            <td><center>house near ishar
</center></td>
<td><center>House has been sold</center></td>
        </tr>
        <tr>
            <td><center>12</center></td>
            <td><center>rahul</center></td>
            <td><center>house near gandhi hill
</center></td>
<td><center>House has been sold</center></td>
        </tr>
        <tr>
            <td><center>13</center></td>
            <td><center>rohanth	</center></td>
            <td><center>house near jubliehills
</center></td>
<td><center>House has been sold</center></td>
        </tr>
        
    </table>
  </div>
</div>

    </div>
    <div>
      <center><button type="button" class="btn btn-warning btn-lg btn-block btn-sm" onClick={()=>navigate("/bidding")}><b>Go to Bidding System</b></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</center>
      </div>
    
    </>
  )
}
