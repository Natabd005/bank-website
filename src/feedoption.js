import { Button } from "@mui/material";
import React from "react";
import "./feedoption.css";

function Feedoption ( {image , header , text , link}){
    return (
        <div className="feedoption">
            <img src={image} />
            <h2>{header}</h2>
            <p>{text}</p>
            <Button>{link}</Button>
        </div>
    )
}
export default Feedoption;