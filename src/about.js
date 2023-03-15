import React from "react";
import "./about.css";
import AboutFeedOption from "./aboutFeedOption";
import AboutNews from "./aboutNews";

function About({feedImage , feedHeader , feedText , newsImage , newsHeader , newsText}){
    return(
        <div className="about">
            <div className="about-introduction">
                <h2>Our Story </h2>
                <p>With over 160 years of banking experience and a presence in 20 countries in Africa, including South Africa, and in key markets globally, we are South Africa and Africa’s largest banking group by assets. Our vision is to be the leading financial services organisation in, for and across Africa.</p>
            </div>
            <div className="about-feed">
              
              <h2>AS YOUR TRUSTED STRATEGIC PARTNER, WE CAN HELP YOU TO:</h2>
              <div className="about-feed-options">
                <AboutFeedOption 
                feedImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/Insights/Proactive%20solutions/reputation_Proactive_solutions_african_development_portrait_sq_l_600x600px_portrait_square_large.jpg"
                feedHeader="Expand your organisation"
                feedText="Navigate new markets and regulatory environments with confidence through our local expertise. Unlock opportunities for Africa-China trade through our partnership with the Industrial and Commercial Bank of China (ICBC)." />
                <AboutFeedOption 
                feedImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/Insights/Proactive%20solutions%203/Reputation_Proactive3_SAbusiness_AV_landscape_fw_1500x365px_landscape_full_width.jpg"
                feedHeader="Compete across Africa"
                feedText="Discover business opportunities through a partner with localised perspectives. on regional politics, economics and business dynamics. Know you can rely on a financial partner with the largest balance sheet on the continent." />
                <AboutFeedOption 
                feedImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/Insights/Newsletter%20Trade/reputation_April18_newlsetter_trade_landscape_600x300px_landscape.jpg"
                feedHeader="Manage business efficiently"
                feedText="Your personal, dedicated relationship manager provides you with a single point of contact. Our local and foreign ties give you access to the right solutions that your business needs to thrive." />
                </div>
            </div>
            <div className="about-news-div">
                <div className="about-news-row">
                    <AboutNews 
                    newsImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/About%20us/Client%20approach/reputation_client_approach_portrait_sq_300x300px_portrait_squarev2.jpg"
                    newsHeader="Our client approach"
                    newsText="With 160 years of on-the-ground experience in various sectors, we have a deep understanding of local markets, and the capabilities to deliver specialist solutions for our clients." />
                     <AboutNews 
                    newsImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/About%20us/Our%20structure/CIB_Aboutus_OurStructure_Landscape_FW_H_1600x486.jpg"
                    newsHeader="Our structure"
                    newsText="Our on-the-ground presence in 20 countries in Africa and key global markets, as well as cross-border capabilities, enables us to drive growth and development across the continent." />
                </div>
    <div className="about-news-row">
                <AboutNews 
                newsImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/About%20us/Financial%20results/Reputation_financial_results_landscape_600x300px_landscape.jpg"
                newsHeader="Financial results"
                newsText="Invesment Bank Group produces resilient results in challenging environments." />
                 <AboutNews 
                newsImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/About%20us/Credit%20ratings/reputation_credit_ratings_portrait_400x472px_portraitv2.jpg"
                newsHeader="Credit ratings"
                newsText="Long-term foreign currency ratings for Invesment Bank Group Limited." />
    </div>
            </div>
        </div>
    )
}
export default About;