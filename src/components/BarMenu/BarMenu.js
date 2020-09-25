import React from "react";
import GeneralBarMenu from "./General/General";
import classes from "./BarMenu.module.css";

const BarMenu = props => {
    return <div className={classes.BarMenuContainer}>
        <div className={classes.BarMenuTitle}>{props.title}</div>
        <div>{props.submenu && props.submenu.map(submenu => <GeneralBarMenu {...submenu} />)}</div>
    </div>
}

export default BarMenu;