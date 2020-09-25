import React from "react";
import classes from "./General.module.css";

const GeneralBarMenu = props => {
    return <div className={classes.GeneralMenuContainer}>
        {props.title && <h2 className={classes.Heading}>{props.title}</h2>}
        {(props.items || []).map(item => {
            return <div key={item.name} className={classes.MenuContainer}>
                <div className={classes.ItemRow}>
                    <div className={classes.TitleDetailsContainer}>
                        <h4 className={classes.Title}>{item.name}</h4>
                        {item.details && <p className={classes.Details}>{item.details}</p>}
                    </div>
                    {(item.price || item.pitcherPrice) && <div>
                        {item.price && <div className={classes.Price}>{item.price}</div>}
                        {item.pitcherPrice && <div className={classes.Price} style={{ marginTop: "20px" }}>{item.pitcherPrice} <span style={{ fontSize: "0.7em" }}>(Pitcher)</span></div>}
                    </div>}
                    
                    {item.subItems && <div>
                        {item.subItems.map(subItem => {
                            return <>
                                {subItem.quantity && <div className={classes.Price} style={{ marginBottom: "20px" }}>
                                    <span style={{ fontSize: "0.8em" }}>({subItem.quantity})</span>{subItem.price}
                                </div>}
                            </>
                        })}
                    </div>}
                </div>
            </div>
        })}
    </div>
}

export default GeneralBarMenu;