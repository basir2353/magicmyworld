import React from "react";

function Payment() {
  const handlePayment = async () => {
    const mollie = window.Mollie; // Assuming Mollie.js is loaded globally
    try {
      const payment = await mollie.createPayment({
        amount: {
          currency: "EUR",
          value: "10.00", // Replace with your amount
        },
        description: "1 Month Package", // Replace with the package description
        redirectUrl: `${window.location.origin}/payment-success`, // Replace with your success URL
      });

      // Redirect the user to the Mollie payment page
      window.location.href = payment.getPaymentUrl();
    } catch (error) {
      console.error("Error creating payment:", error);
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
}

export default Payment;
