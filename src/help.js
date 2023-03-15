import { CalendarMonth , HelpOutline, LocationOn } from "@mui/icons-material";
import React from "react";
import "./help.css";

function Help() {
    return(
        <div className="help">
            <h2>How Can We Help ?</h2>
            <div className="help-options">
            <div>
                <LocationOn className="help-icon" /> <span>Find a location &gt;</span>
            </div>
            <div>
                <CalendarMonth  className="help-icon" /> <span>Make an Appointment &gt;</span>
            </div>
            <div>
                <HelpOutline  className="help-icon" /> <span>Quick Help &gt;</span>
            </div>
            </div>
        </div>
    )
}
export default Help;