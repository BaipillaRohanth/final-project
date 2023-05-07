import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate()
  // const auth = useAuth(); 
  // const NavLinkStyles = ({isActive}) => {
  //   return{
  //       fontWeight : isActive ? 'bold' : 'none',
  //       textDecoration : isActive ? 'none' : 'none'
  //   }
  // }
  const loc = useLocation()

  return (
    <div>
      <div class="text">
      <center><h1><font face="Brush Script MT">REAL ESTATE MANAGEMENT SYSTEM</font></h1></center>
      </div>
      {/* <h1 class="text-center"></h1> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    {/* <Link class="navbar-brand" to="/">Navbar</Link> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>{(loc.pathname!=="/login" && loc.pathname!=="/register"&&loc.pathname!=="/"&&loc.pathname!=="/admin"&&loc.pathname!=="/bidding")?
    <div class="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      &nbsp;&nbsp;&nbsp;<li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">DashBoard</Link>
        </li>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li class="nav-item">
          <Link class="nav-link" to="/land">Land Service</Link>
        </li>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li class="nav-item">
          <Link class="nav-link" to="/residential">Residential Service</Link>
        </li>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li class="nav-item">
          <Link class="nav-link" to="/commercial">Commercial Service</Link>
        </li>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li class="nav-item">
          <Link class="nav-link" to="/industrial">Industrial Service</Link>
        </li>
        {/* &nbsp;<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>Services</b>
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/land">Land</Link></li>
            <li><Link class="dropdown-item" to="/residential">Residential</Link></li>
            <li><Link class="dropdown-item" to="/commercial">Commercial</Link></li>
            <li><Link class="dropdown-item" to="/industrial">Industrial</Link></li>
            
          </ul>
          
          
        </li> */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li class="nav-item">
          <Link class="nav-link" to="/feedback">FeedBack</Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li class="nav-item">
          <Link class="nav-link" to="/contact">Contact Us</Link>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li class="nav-item">
          <Link class="nav-link" to="/astrology">Astrology</Link>
        </li>

        

        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li class="nav-item">
          <Link class="nav-link" to="/profile">Profile</Link>
        </li> */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li class="nav-item">
          <Link class="nav-link" to="/agents">Agents</Link>
        </li>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li class="nav-item">
          <Link class="nav-link" to="/about">About Us</Link>
        </li>
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li class="nav-item">
          <Link class="nav-link" to="/chatbot">ChatBot</Link>
        </li> */}
      </ul>
      <form class="d-flex" role="search">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
        &nbsp;<button class="btn btn-outline-success"onClick={()=>navigate("/")}>Logout</button>
      </form>
    </div>:null}
  </div>
</nav>
    </div>
  )
}

export default Navbar
