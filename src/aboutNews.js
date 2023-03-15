import React from "react";
import "./aboutNews.css";
import { Button } from "@mui/material";


function AboutNews({newsImage , newsHeader , newsText}){
    return(
        <div className="about-news">
            <img src={newsImage} />
            <h2>{newsHeader} </h2>
            <p>{newsText}</p>
            <Button>Tell Me More</Button>
        </div>
    )
}
export default AboutNews;