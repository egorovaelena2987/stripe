
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_live_51Q6OAyJKdWtjt2UiXeqvoszRw6CsyXHJQM9Y71dvdBNK1K2fwo7KtKFIClcG2i7VjpMO0GvEw512ZRlQ5vLpWMx200i4Gq6qOW";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;