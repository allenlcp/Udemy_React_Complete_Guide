import React, {Component} from "react";
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Aux/Aux';

class OrderSummary extends Component {
  
  componentWillUpdate() {
    console.log('[OderSummary.js] - componentWillUpdate')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKeys) => {
      return (
        <li key={igKeys}>
          <span style={{ textTransform: "capitalize" }}>
              {igKeys}
          </span>
          : {this.props.ingredients[igKeys]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredient:</p>
        <ul>{ingredientSummary}</ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button buttonType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button buttonType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    );
  }
}

export default OrderSummary;
