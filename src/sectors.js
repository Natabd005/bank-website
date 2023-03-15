import React from "react";
import SectorItem from "./sectorItem";
import "./sectors.css";

function Sectors({sectorImage , sectorHeader , sectorText , sectorLink}) {
    return(
        <div className="sectors">
            <div className="sectors-intro">
                <h2>Sectors</h2>
                <p>Capabilities and expertise in industry sectors most relevant to real growth and development in Africa. We provide insight into the commercial, regulatory and operational realities by connecting you to opportunities with key industry players, governments, regulators and investors in Africa and abroad.</p>
            </div>
            <div className="sectors-options">
                <div className="sectors-options-row">
                    <SectorItem 
                    sectorImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/Sectors/BEE/CIB_sector_bee2_landscape_sw_520x240px.jpg"
                    sectorHeader="BEE Sector"
                    sectorText="Leverage our BEE expertise for your business growth"
                    sectorLink="Tell Me More >" />
                      <SectorItem 
                    sectorImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/Sectors/Consumer/CPG%20and%20Beverages/CIB_ConsumerSector__CPG_Beverages_534x400.jpg"
                    sectorHeader="Consumer Sector"
                    sectorText="Your consumer sector partner that will drive your business growth"
                    sectorLink="Tell Me More >" />
                      <SectorItem 
                    sectorImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/Sectors/FinancialInstitutions/CIB_sector_financial_institutions2_landscape_sw_520x240px.jpg"
                    sectorHeader="Financial Institutions Sector"
                    sectorText="Connecting you to the right partners in the financial institutions sector"
                    sectorLink="Tell Me More >" />
                </div>
                <div className="sectors-options-row">
                    <SectorItem 
                    sectorImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/Sectors/Industrials/sector-industrial_landscape_sw_520x240px_landscape_short_width.jpeg"
                    sectorHeader="Industrials Sector"
                    sectorText="Providing connectivity and insights-driven solutions to support and grow your business"
                    sectorLink="Tell Me More >" />
                      <SectorItem 
                    sectorImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/Sectors/MiningandMetals/MiningIndaba2023/CIB_Sectors_Mining_Indaba_Landscape_sw_520x240.jpg"
                    sectorHeader="Mining and Metals Sector"
                    sectorText="Blue sky thinking that's creating a greener Africa for all"
                    sectorLink="Tell Me More >" />
                      <SectorItem 
                    sectorImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/Sectors/OilandGas/sector_oil&gas_landscape_sw_520x240px_landscape_short_width.jpg"
                    sectorHeader="Oil and Gas Sector"
                    sectorText="Your oil and gas partner for growth in Africa"
                    sectorLink="Tell Me More >" />
                </div>
                <div className="sectors-options-row">
                    <SectorItem 
                    sectorImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/Sectors/PowerandInfrastructure/AEI%202023/CIB_Sectors_AEI_Portrait_sq_300x300.jpg"
                    sectorHeader="Power and Infrastructure Sector"
                    sectorText="Supporting economic progress through power and infrastructure"
                    sectorLink="Tell Me More >" />
                      <SectorItem 
                    sectorImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/Sectors/PublicSector/CIB_sector-public-sector2_landscape_sw_520x240px_landscape.jpg"
                    sectorHeader="Public Sector"
                    sectorText="Driving financial solutions in the public sector"
                    sectorLink="Tell Me More >" />
                      <SectorItem 
                    sectorImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/Sectors/RealEstate/sector_realestate_landscape_sw_520x240px_landscape_short_width.jpg"
                    sectorHeader="Real Estate Sector"
                    sectorText="Partnering with you for your real estate financing success"
                    sectorLink="Tell Me More >" />
                </div>
                <div className="sectors-options-row">
                <SectorItem 
                    sectorImage="https://corporateandinvestment.standardbank.com/static_file/SBG/Assets/Img/CIB/Sectors/TMT/CIB_Infra_Africa_TMT_Landscape_sw_520x240pxl_64467.jpg"
                    sectorHeader="Telecommunications, Media and Technology Sector"
                    sectorText="Connecting you to the right partners in the telecommunications, media and technology sector"
                    sectorLink="Tell Me More >" />
                    </div>
            </div>
        </div>
    )
}
export default Sectors;