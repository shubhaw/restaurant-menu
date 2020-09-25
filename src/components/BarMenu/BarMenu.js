import React from "react";
import GeneralBarMenu from "./General/General";
import classes from "./BarMenu.module.css";
import LiquorSpiritsMenu from "./LiquorSpiritsMenu/LiquorSpiritsMenu";

const BarMenu = props => {
    return <div className={classes.BarMenuContainer}>
        <div className={classes.BarMenuTitle}>{props.title}</div>
        {!(props.title === "Liquor & Spirits" || props.title === "Litts") && props.submenu && <>
            {props.submenu.map((submenu, index) => <GeneralBarMenu key={index} {...submenu} />)}
        </>}
        {(props.title === "Liquor & Spirits" || props.title === "Litts") && <>
            {props.submenu && props.submenu.map((submenu, index) => <LiquorSpiritsMenu key={index} {...submenu} />)}
        </>}
    </div>
}

export default BarMenu;