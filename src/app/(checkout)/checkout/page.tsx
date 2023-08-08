import CheckoutForm from "@/components/layout/CheckoutForm";
import CheckoutSummary from "@/components/layout/CheckoutSummary";

const CheckoutPage = () => {
  return (
    <div style={{display:"flex", gap:"1.5rem", backgroundColor:"#f4f4f4"}}>
      <CheckoutForm />
      <CheckoutSummary />
    </div>
  );
};
export default CheckoutPage;
