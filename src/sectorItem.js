import React from "react";
import { Link } from "react-router-dom";
import "./sectorItem.css";

function SectorItem({sectorImage , sectorHeader , sectorText , sectorLink}){
    return(
        <div className="sector-item">
            <img src={sectorImage} />
            <h2>{sectorHeader}</h2>
            <p>{sectorText}</p>
            <Link>{sectorLink}</Link>
        </div> 
    )
}
export default SectorItem;