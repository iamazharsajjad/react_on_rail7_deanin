import React from 'react'
import { Link } from "react-router-dom";

function Navbar(){
  return (
    <div>
      <>
        <nav>   
            <Link to='/'>Posts List</Link>
            {" | "}
            <Link to='/new'>New Post</Link>
        </nav>
      </>
    </div>
  )
} 

export default Navbar;