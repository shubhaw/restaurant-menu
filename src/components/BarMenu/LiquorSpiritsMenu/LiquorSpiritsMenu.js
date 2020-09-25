import React from "react";
import classes from "./LiquorSpiritsMenu.module.css";

const LiquorSpiritsMenu = props => {
    return <div className={classes.Container}>
        <h3 className={classes.Title}>{props.title}</h3>
        <table className={classes.Table}>
            <thead>
                <tr>
                    <th></th>
                    {props.quantities.map(quantity => <th style={{ fontSize: "min(3vw, 18px)" }} key={quantity} className={classes.HeaderField}>{quantity}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.items.map(item => {
                    return <tr key={item.name}>
                        <td className={classes.ItemNameContainer}>
                            {!item.description && <div className={classes.OnlyItemName}>{item.name}</div>}
                            {!!item.description &&
                                <>
                                    <div className={classes.ItemName}>{item.name}</div>
                                    <div className={classes.ItemDescription}>{item.description}</div>
                                </>}
                        </td>
                        {item.details.map(detail => <td valign="top" key={detail.price}>{detail.price}</td>)}
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default LiquorSpiritsMenu;