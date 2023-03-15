import { Button } from "@mui/material";
import React from "react";
import "./announcment.css";

function Announcment () {
    return(
        <div className="announcment">
            <div className="announcment-info">
            <h2>A home of your own</h2>
            <p>With low down payment options 
                on a fixed-rate mortgage</p>
            <Button>Get Started</Button></div>
        </div>
    )
}
export default Announcment;
