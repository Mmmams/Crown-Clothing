import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pablishableKey =
    "pk_test_51IWJi6KJCKx0WD0TlB75VbbG97BlTZ5tO6aAzjtrlFK5xi21Viyf2ZTWUnCuYmqP9bpp2VXMv0N1QDcuj5aSu22k003bMpgeBE";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((res) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };
  return (
    <StripeCheckout
      name="CROWN CLOTHING"
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Yout total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pablishableKey}
    />
  );
};

export default StripeCheckoutButton;
