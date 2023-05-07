import React from 'react'
import axios from 'axios';
export default function Contact() {
  const handleSubmit = async(e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget);
    await axios.post("http://localhost:5000/contact",{
        name : data.get("name"),
        email : data.get("email"),
        exp : data.get("exp"),
        improve : data.get("improve"),
        msg : data.get("msg")
    })
    .then((res)=>{
        console.log(res.data)
        alert("submitted successsfully")
    }).catch((err)=>{
        console.log(err);
    })
}

  return (
    
    <div className="p1">
      <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : <b>realestaterems67@gmail.com</b><br></br>6309862111</div>
          {/* <div className="app-contact">CONTACT INFO : 6309862111</div> */}
        </div>
        <form>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="ISSUE"/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button"onClick={()=>(alert("submission cancelled"))}>CANCEL</button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="app-form-button"onClick={()=>((handleSubmit))}>SEND</button>
            </div>
          </div>
        </div></form>
      </div>
    {/* </div>
    <div className="credits"><br></br>
      inspired by */}
       {/* <a className="credits-link" href="https://dribbble.com/shots/2666271-Contact" target="_blank">  */}
        <svg className="dribbble" viewBox="0 0 200 200">
          <g stroke="#ffffff" fill="none">
            {/* <circle cx="100" cy="100" r="90" strokeWidth="20"></circle> */}
            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" strokeWidth="20"></path>
            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" strokeWidth="20"></path>
            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" strokeWidth="20"></path>
          </g>
        </svg>
        {/* REMS Team */}
       {/* </a>  */}
    </div>
  </div>
</div>

    </div>
  )
}
