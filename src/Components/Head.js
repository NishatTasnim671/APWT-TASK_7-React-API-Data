import React from "react";
import { Link } from "react-router-dom";
const Head = ()=>
{
    return(
        <>
           <div >
               <li ><Link to="/" >Home</Link></li>
               <li><Link to="/categorylist">Category Details</Link></li>
               <li><Link to="/profile">Profile</Link></li>
               <li><Link to="/About">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
               
           </div>
        </>
    )
}

export default Head;