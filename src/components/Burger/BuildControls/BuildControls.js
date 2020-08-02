import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "../BuildControls/BuildControl/BuildControl";

const controls = [
  { label: "Salad Rs.5", type: "salad" },
  { label: "Bacon Rs.10", type: "bacon" },
  { label: "Cheese Rs.10", type: "cheese" },
  { label: "Meat Rs.20", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price Rs. <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);
export default buildControls;
