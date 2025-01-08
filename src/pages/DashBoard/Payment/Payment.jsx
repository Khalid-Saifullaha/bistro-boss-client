import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="Please oay to eat"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutFrom></CheckoutFrom>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
