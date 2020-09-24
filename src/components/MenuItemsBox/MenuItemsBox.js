import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import classes from "./MenuItemsBox.module.css";

const MenuItemsBox = props => {
    return <div className={classes.MenuItemsBox}>
        {props.title && <div className={classes.MenuItemTitle}>{props.title}</div>}
        {props.items.map(item => <MenuItem key={item.name} {...item} />)}
    </div>
}

export default MenuItemsBox;