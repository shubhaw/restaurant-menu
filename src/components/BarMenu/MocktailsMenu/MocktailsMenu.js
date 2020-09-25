import React from "react";
import classes from "./MocktailsMenu.module.css";

const MocktailsMenu = props => {
    return <div>
        <h2 className={classes.Heading}>{props.title || "Mocktails"}</h2>
        {(props.items || []).map(item => {
            return <ul className={classes.MocktailsMenuContainer}>
                <li>
                    <div className={classes.ItemRow}>
                        <div className={classes.TitleDetailsContainer}>
                            <h4 className={classes.Title}>{item.title || "Why so serious?"}</h4>
                            <p className={classes.Details}>{item.details || "Named after a star system, this is your favourite Apple Cinnamon Mojito made with fresh Mint, fresh Lemon chunks, Lime Juice, Mint Syrup, and Cinnamon"}</p>
                        </div>
                        <div className={classes.Price}>{item.price || 280}</div>
                    </div>
                </li>
            </ul>
        })}
    </div>
}

export default MocktailsMenu;