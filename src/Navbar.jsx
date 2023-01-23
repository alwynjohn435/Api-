import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
  

return(
    <>
<nav className="navbar navbar-expand-lg bg-primary back2 fixed-top">
  <div className="container-fluid px-5">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item px-5">
          <Link className="nav-link" to="/Sports">Sports</Link>
        </li>
        
        <li className="nav-item px-5">
          <Link className="nav-link enabled" to="/Medical">Medical</Link>
        </li>
        <li className="nav-item px-5">
          <Link className="nav-link enabled" to="/Technology">Technology</Link>
        </li>
        <li className="nav-item px-5">
          <Link className="nav-link enabled" to="/Business">Business</Link>
        </li>
        <li className="nav-item px-5">
          <Link className="nav-link enabled" to="/Entertainment">Entertainment</Link>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>



    </>
)


}