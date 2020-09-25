import React from "react";
import classes from "./Menu.module.css";
import MenuItemsBox from "../MenuItemsBox/MenuItemsBox";

const Menu = props => {
    return <div>
        <h2 className={classes.Title}>{props.title}</h2>
        {props.description && <p className={classes.Description}>{props.description}</p>}
        {
            props.submenu && props.submenu.map((submenu, index) => <MenuItemsBox key={index} {...submenu} />)
        }
    </div>
}

export default Menu;