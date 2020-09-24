import React from "react";
import classes from "./MenuItem.module.css";
import VegIcon from "../../assets/images/vegIcon.png";
import NonVegIcon from "../../assets/images/nonVegIcon.png";
// TODO: change the path for actual icons
import GravitySpecialIcon from "../../assets/images/nonVegIcon.png";
import SpicyIcon from "../../assets/images/nonVegIcon.png";
import DoubleSpicyIcon from "../../assets/images/nonVegIcon.png";

const MenuItem = props => {
    const [icon, setIcon] = React.useState();
    React.useEffect(() => {
        switch(props.speciality) {
            case "veg":
                setIcon(VegIcon);
                break;
            case "nonveg":
                setIcon(NonVegIcon);
                break;
            case "gravityspecial":
                setIcon(GravitySpecialIcon);
                break;
            case "spicy": 
                setIcon(SpicyIcon);
                break;
            case "doublespicy":
                setIcon(DoubleSpicyIcon);
                break;
            default:
                setIcon();
        }
    }, [props.speciality])
    return <div className={classes.MenuItemContainer}>
        <div className={classes.MenuItemTitle}>
            <div>{props.name}</div>
            <div>{props.price}</div>
            {props.speciality && <img src={icon} width="15" height="15" />}
        </div>
        <div className={classes.MenuItemDescription}>{props.details}</div>
    </div>
}

export default MenuItem;