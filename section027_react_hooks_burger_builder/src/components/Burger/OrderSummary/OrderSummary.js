import React from "react";
import Button from "../../UI/Button/Button";
import Aux from "../../../hoc/Aux/Aux";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKeys => {
    return (
      <li key={igKeys}>
        <span style={{ textTransform: "capitalize" }}>{igKeys}</span>:{" "}
        {props.ingredients[igKeys]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredient:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button buttonType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button buttonType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
