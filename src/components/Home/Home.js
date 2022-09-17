import React from "react";
import classes from "./Home.module.css";
import Logo from "../../assets/images/GravitySpacebar_Logo.png";

const Home = ({ setMainMenu }) => {
    return <div className={classes.HomeContainer}>
        <div className={classes.SpaceFilling}></div>
        <div className={classes.ButtonsDiv}>
            <button className={classes.Button} style={{ marginBottom: "40px"}} onClick={() => setMainMenu("foodMenu")}>Food Menu</button>
            <button className={classes.Button} onClick={() => setMainMenu("barMenu")}>Bar Menu</button>
        </div>
    </div>
}

export default Home;
