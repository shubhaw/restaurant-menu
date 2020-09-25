import React from "react";
import MenuIcon from "../../assets/images/menu.svg";
import Logo from "../../assets/images/GravitySpacebar_Logo.png";
import classes from "./Toolbar.module.css";

const Toolbar = ({ onMenuIconClick, onLogoClick }) => {
    return <div className={classes.ToolbarContainer}>
        <img src={Logo} width="100" height="40" alt="Gravity Spacebar" onClick={onLogoClick} />
        <div>
            <div>
                <img src={MenuIcon} width="30" height="30" onClick={onMenuIconClick} alt="Toggle Menu" />
            </div>
            <div style={{ fontSize: "0.6em" }}>Menu</div>
        </div>
    </div>
}

export default Toolbar;