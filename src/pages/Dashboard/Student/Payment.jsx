import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
const cart = useLoaderData();
    const price = parseFloat(cart.price.toFixed(2));
  return (
    <div>
      <Helmet>
        <title>Sports Club | Payment </title>
      </Helmet>
      <h1 className="text-4xl text-center pb-2 my-text font-semibold my-12">
        Payment Your Selected Class
      </h1>
      <Elements stripe={stripePromise}> 
          <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
