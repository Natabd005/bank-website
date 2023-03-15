import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
 
function Header(){
    return(

        <div className="header">
       <div className="header-left">
          <Link to="/"> <h3> Invesment Bank</h3></Link>
            </div>
            <div className="header-middle"><Link  to="/">arabic</Link>
                <Link to="/sectors">Sectors</Link>
                
                <Link  to="/about">About Us</Link>
                <Link  to="/enroll">Enroll</Link>
            </div>
            <div className="header-right">
                <Search className="header-search" />
                <Button className="header-button" >Search</Button>
            </div>
        </div>
    )
}
export default Header ;