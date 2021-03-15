import React from "react";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import "./cart-dropdown.style.scss";

import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.id} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
