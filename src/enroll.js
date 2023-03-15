import { Button, Checkbox } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./enroll.css";

function Enroll(){
    return(
        <div className="enroll">
            <form>
            <div className="enroll-row">
                <input type="text" placeholder="First Name" required/>
                <input type="text" placeholder="Last Name" required/>
            </div>
            <div className="enroll-row">
                <input type="text" placeholder="UserName" required/>
                <input type="text" placeholder="Occupation" />
            </div>
            <div className="enroll-row">
                <input type="email" placeholder="Email" required/>
                <input type="text" placeholder="Phone Number" required/>
            </div>
           < div className="enroll-row">
                <input type="password" placeholder="Password" required/>
                <input type="password" placeholder="Confirm Password" required/>
            </div>
            <div className="enroll-row">
                <Checkbox/> <span>By Checking this , You Agree To Our Privacy Policy</span>
            </div>
            <Button className="enroll-button">Enroll Now</Button>
            <div className="enroll-row">
                <span>Already Have Account ?</span> <Link to="/">Sign In</Link>
            </div>
            </form>
        </div>
    )
}
export default Enroll;