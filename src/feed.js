import React from "react";
import "./feed.css";
import Feedoption from "./feedoption";

function Feed ({image , header , text , link}){
    return(
        <div className="feed">
           <div className="feed-header"><h1 >Financial guidance and support</h1></div>
            <div className="feed-div">
            <Feedoption 
            image="https://www17.wellsfargomedia.com/assets/images/contextual/responsive/smlpromo/wfi000_ph_g_1345111232_616x353.jpg"
            header="Spend less. Save more. Relax more."
            text="These four steps could help you make it happen"
            link="Manage Spending and Saving" />
            <Feedoption 
            image="https://www17.wellsfargomedia.com/assets/images/contextual/responsive/smlpromo/wfi000_ph_g_900217040_616x353.jpg"
            header="Reduce debt. Build credit. Enjoy life"
            text="Discover four steps that may help you reduce debt and strengthen credit"
            link="Build Credit and Reduce Debt" />
            <Feedoption 
            image="https://www17.wellsfargomedia.com/assets/images/contextual/responsive/smlpromo/wfi000_ph_g_557715963_616x353.jpg"
            header="Get tools. Get tips. Get peace of mind."
            text="Discover digital tools to help you budget, save, manage credit, and more"
            link="Access The Toolkit" /></div>

        </div>
    )
}
export default Feed;