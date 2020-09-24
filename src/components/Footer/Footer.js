import React from "react";
import GravitySpacebarLogo from "../../assets/images/GravitySpacebar_Logo.png";
import classes from "./Footer.module.css";


const Footer = () => {
    return <div className={classes.FooterContainer}>
        <p className={classes.FooterText}>All government taxes are applicable & we levy 10% service charge.</p>
        <img src={GravitySpacebarLogo} width="150" alt="Gravity Spacebar" />
    </div>
}

export default Footer;