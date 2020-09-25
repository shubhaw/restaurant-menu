import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import classes from "./MenuItemsBox.module.css";
import VegIcon from "../../assets/images/vegIcon.png";
import NonVegIcon from "../../assets/images/nonVegIcon.png";

const MenuItemsBox = props => {
    const [icon, setIcon] = React.useState();
    React.useEffect(() => {
        props.icon === "veg" ? setIcon(VegIcon) : setIcon(NonVegIcon);
    }, [props.icon])
    return <div className={classes.MenuItemsBox}>
        {props.title && <div className={classes.MenuItemTitle}>
            {props.title}
            {props.icon && <img src={icon} width="20" height="20" alt={props.icon} className={classes.MenuItemTitleIcon} />}
        </div>}
        {props.items.map(item => <MenuItem key={item.name} {...item} />)}
    </div>
}

export default MenuItemsBox;