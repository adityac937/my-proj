import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";
import Aux from "../../../hoc/Aux/Aux";

const checkoutSummary = (props) => {
  return (
    <Aux>
      <div className={classes.CheckoutSummary}>
        <h1>We hope you love Burger , as much we love you!</h1>
        <div style={{ width: "100%", margin: "auto" }}></div>
        <Burger ingredients={props.ingredients} />

        <Button btnType="Danger" clicked={props.checkoutCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.checkoutContinued}>
          Continue
        </Button>
      </div>
    </Aux>
  );
};
export default checkoutSummary;
