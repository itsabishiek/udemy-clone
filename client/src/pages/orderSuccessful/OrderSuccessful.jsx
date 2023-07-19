import React, { useEffect } from "react";
import "./OrderSuccessful.css";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const OrderSuccessful = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");
  const navigate = useNavigate();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("/orders", {
          payment_intent,
        });

        setTimeout(() => {
          navigate("/course-enrolled");
        }, 4000);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, []);

  return (
    <div className="orderSuccessful">
      <img src="/img/success.svg" alt="" />
      <h2>Your Course has been Enrolled :)</h2>
      <p>Start Learning Today!</p>
    </div>
  );
};

export default OrderSuccessful;
