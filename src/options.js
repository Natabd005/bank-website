import React from "react";
import Optionitem from "./optionitem";
import "./options.css";

function Options ({img , header , text , link}){
    return(
        <div className="options">
            <Optionitem 
            img="https://www17.wellsfargomedia.com/assets/images/contextual/responsive/smlprimary/wfi000_ic_b-wf_icon_house_gradient_64x64.png"
            header="Find Your Happiness" 
            link="learn more >"
            text="With a 3% Discount On Every House Loan !"
            />
            <Optionitem 
            img="https://www17.wellsfargomedia.com/assets/images/contextual/responsive/smlprimary/wfi000_ic_b-wf_icon_check_mark_gradient_64x64.png"
            header="Choose The Account That Is Right For You" 
            link="learn more >"
            text="Choose From Different Types Of Accounts"
            />
            <Optionitem 
            img="https://www17.wellsfargomedia.com/assets/images/contextual/responsive/smlprimary/wfi000_ic_b_ui-card_color-gradient_64x64.png"
            text="Get Your Credit Card And Start Using It Now!"
            header="Get Your Credit Card" 
            link="learn more >"
            />
             <Optionitem 
            img="https://www17.wellsfargomedia.com/assets/images/contextual/responsive/smlprimary/wfi000_ic_b_graduation-hat_color-gradient_64x64.png"
            header="Get college Ready" 
            link="learn more >"
            text="Resources to help you plan and pay for college"
            />
            
        </div>
       
    )
}

export default Options;