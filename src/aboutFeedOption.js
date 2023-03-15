import React from "react";
import "./aboutFeedOption.css";


function AboutFeedOption({feedImage , feedHeader , feedText}){
    return(
        <div className="about-feed-option">
            <img src={feedImage} />
            <h2>{feedHeader}</h2>
            <p>{feedText}</p>
        </div>
    )
}
export default AboutFeedOption;