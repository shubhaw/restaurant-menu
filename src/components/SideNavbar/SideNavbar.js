import React from "react";
import classes from './SideNavbar.module.css';

const SideNavbar = props => {
    return <div className={props.open ? classes.SideNavbarContainer : classes.Hide}>
        <div className={classes.Overlay}>
            <div className={classes.NavmenuItemHeading} onClick={() => props.onMainMenuChange("foodMenu")}>Food Menu</div>
            {props.selectedMenu === "foodMenu" && props.foodMenu.map(item => <div className={classes.NavmenuItem}>{item.title}</div>)}
            <div className={classes.NavmenuItemHeading} onClick={() => props.onMainMenuChange("barMenu")}>Bar Menu</div>
            {props.selectedMenu === "barMenu" && props.barMenu.map(item => <div className={classes.NavmenuItem}>{item.title}</div>)}
        </div>
    </div>
}

export default SideNavbar;