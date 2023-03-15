import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, YouTube  } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
    return(
        <div className="footer">
            <div className="footer-options">
            <Link to="/"> Privacy, Cookies, Security & Legal   |</Link> 
            <Link  to="/"> Notice of Data Collection   |</Link> 
            <Link  to="/">General Terms of Use   |</Link> 
            <Link  to="/">Online Access Agreement   |</Link> 
            <Link  to="/">Ad Choices   |</Link> 
            <Link  to="/" >Report Fraud  </Link> <br></br> 
            <br></br>
            <Link  to="/">About Invesment Bank   |</Link> 
            <Link  to="/">Careers   |</Link> 
            <Link  to="/">Diversity and Accessibility   |</Link> 
           <Link  to="/">Sitemap</Link>
            </div>
            <div className="footer-media">
                <Facebook className="footer-icon"/> 
                <LinkedIn   className="footer-icon"/>
                 <Instagram  className="footer-icon"/> 
                 <Pinterest  className="footer-icon" /> 
                 <YouTube  className="footer-icon"/>
                 <Twitter  className="footer-icon"/>

            </div>
            <div className="footer-text">
                <p>
                1. You must be the primary account holder of an eligible Invesment Bank consumer account with a FICO® Score available, and enrolled in Wells Fargo Online®. Eligible Wells Fargo consumer accounts include deposit, loan, and credit accounts, but other consumer accounts may also be eligible. Contact Wells Fargo for details. Availability may be affected by your mobile carrier’s coverage area. Your mobile carrier's message and data rates may apply.

Please note that the score provided under this service is for educational purposes and may not be the score used by Wells Fargo to make credit decisions. Wells Fargo looks at many factors to determine your credit options; therefore, a specific FICO® Score or Wells Fargo credit rating does not guarantee a specific loan rate, approval of a loan, or an upgrade on a credit card.

Wells Fargo and Fair Isaac are not credit repair organizations as defined under federal and state law, including the Credit Repair Organizations Act. Wells Fargo and Fair Isaac do not provide credit repair services or advice or assistance with rebuilding or improving your credit record, credit history, or credit rating.

FICO is a registered trademark of Fair Isaac Corporation in the United States and other countries.
                </p>
                <p>
                2. Enrollment with Zelle® through Invesment Bank Online® or Invesment Bank Business Online® is required. Terms and conditions apply. U.S. checking or savings account required to use Zelle®. Transactions between enrolled users typically occur in minutes. For your protection, Zelle® should only be used for sending money to friends, family, or others you trust. Neither Invesment Bank nor Zelle® offers a protection program for authorized payments made with Zelle®. The Request feature within Zelle® is only available through Invesment Bank using a smartphone. Payment requests to persons not already enrolled with Zelle® must be sent to an email address. To send or receive money with a small business, both parties must be enrolled with Zelle® directly through their financial institution’s online or mobile banking experience. For more information, view the Zelle® Transfer Service Addendum to the Invesment Bank Online Access Agreement. Your mobile carrier's message and data rates may apply. Account fees (e.g., monthly service, overdraft) may apply to Invesment Bank account(s) with which you use Zelle®.
                </p>
                <p className="footer-text-important">
                Investment and Insurance Products are:<br></br>

- Not Insured by the FDIC or Any Federal Government Agency<br></br>
 - Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate<br></br>
- Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested
                </p>
                <p>
                Investment products and services are offered through Invesment Bank Advisors. Invesment Bank Advisors is a trade name used by Invesment Bank Clearing Services, LLC (WFCS) and Invesment Bank Advisors Financial Network, LLC, Members SIPC, separate registered broker-dealers and non-bank affiliates of Invesment Bank & Company<br></br>
                <br></br>

Android, Chrome, Google Pay, Google Pixel, Google Play, Wear OS by Google, and the Google Logo are trademarks of Google LLC.<br></br>
<br></br>
Apple, the Apple logo, Apple Pay, Apple Watch, Face ID, iPad, iPad Pro, iPhone, iTunes, Mac, Safari, and Touch ID are trademarks of Apple Inc., registered in the U.S. and other countries. Apple Wallet is a trademark of Apple Inc. App Store is a service mark of Apple Inc.<br></br>
<br></br>
Deposit products offered by Invesment Bank Bank, N.A. Member FDIC.
                </p>
            <span className="footer-rights">  &copy; All Rights Reserved 2023</span>  
            </div>
        </div>
    )
}
export default Footer;