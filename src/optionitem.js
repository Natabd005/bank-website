import React from "react";
import { Link } from "react-router-dom";
import "./optionitem.css";


function Optionitem({img , text, link , header}){
    return(
        <div className="optionitem">
            <img src={img} />
            <h3>{header}</h3>
            <p>{text}</p>
            <Link to="/">{link}</Link>
        </div>
    )
}
export default Optionitem;