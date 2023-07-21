import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51NV8VZSAvKgu4RW0HugDVdvuQrq0vkIRgt1VrldNqLAGFC6Cujnx8UC8I80vklTkhEsq7WnqYUSe6uCgYQkBsqrd006pF4fhf3"
);

const Pay = () => {
  const { courseId } = useParams();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const makePayment = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${courseId}`
        );

        setClientSecret(res.data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };
    makePayment();
  }, []);

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#a435f0",
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="pay">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
