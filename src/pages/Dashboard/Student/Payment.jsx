import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
const cart = useLoaderData();
    const price = parseFloat(cart.price.toFixed(2));
  return (
    <div>
      <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
