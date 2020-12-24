import React from "react";
import classes from './SideNavbar.module.css';

const SideNavbar = props => {
    const onSubMenuChange = (index) => {
        props.onSubMenuChange(index);
        props.closeSideNavbar();
    }

    return <div className={props.open ? classes.SideNavbarContainer : classes.Hide}>
        <div className={classes.Overlay}>
            {/* <div className={classes.NavmenuItemHeading} onClick={() => props.onMainMenuChange("foodMenu")}>Food Menu</div>
            {props.selectedMenu === "foodMenu" && props.foodMenu.map((item, index) => <div key={item.title} className={classes.NavmenuItem} onClick={() => onSubMenuChange(index)}>{item.title}</div>)} */}
            <div className={classes.NavmenuItemHeading} onClick={() => props.onMainMenuChange("barMenu")}>Bar Menu</div>
            {props.selectedMenu === "barMenu" && props.barMenu.map((item, index) => <div key={item.title} className={classes.NavmenuItem} onClick={() => onSubMenuChange(index)}>{item.title}</div>)}
        </div>
    </div>
}

export default SideNavbar;