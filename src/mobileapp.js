import { Apple, Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./mobileapp.css";

function Mobileapp () {
    return (
        <div className="mobileapp">
          <img src="https://www17.wellsfargomedia.com/assets/images/rwd/Native_App_Phone_Personal_v8.png" />
     <div className="mobileapp-text">    <h2>Banking in the palm of your hand</h2>
          <p>Our Invesment Bank Mobile® app gives you fast 
            <br></br> and secure access to your finances<br></br> 
            <br></br> 

Check your account balance<br></br> 
View your latest FICO® Score<sup>1</sup><br></br> 
Send and receive money with Zelle®<sup>2</sup> <br></br>  </p>
<h4>Download our app</h4>
<div className="mobileapp-buttons">
<Button className="apple-button"><Apple/>App Store</Button>
<Button><Google/>Google Play</Button></div>
<p >
Screen image is simulated <br></br>  
Zelle® and the Zelle® related marks are wholly owned by Early Warning Services, LLC and are used herein under license.
</p></div> 
            </div>
    )
}
export default Mobileapp;