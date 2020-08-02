import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: " ",
    email: " ",
    address: {
      street: " ",
      postal: " ",
    },
  };
  orderHandler = (e) => {
    e.preventDefault();
    console.log(this.props.ingredients);
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Conatact Details</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />

          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your email"
          />
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Your street"
          />
          <input
            className={classes.Input}
            type="postal"
            name="postal"
            placeholder="Your Postal"
          />

          <Button btnType="Success">Order</Button>
        </form>
      </div>
    );
  }
}
export default ContactData;
