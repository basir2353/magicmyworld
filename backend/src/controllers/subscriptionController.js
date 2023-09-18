const { default: axios } = require("axios");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/User");



const makePayment = catchAsync(async (req, res) => {
  const { amount } = req.body;
  if (typeof amount !== 'number' || isNaN(amount)&&[9.99,24.99].includes(amount) ) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  let data = JSON.stringify({
    amount: {
      currency: "EUR",
      value: amount.toFixed(2),
    },
    description: "Payment For Unlimited credits",
    redirectUrl: "https://example.com", // Update with your actual redirect URL
    metadata: {
      userId: req.user.id,
      months:amount===9.99?1:6 
    },
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.mollie.com/v2/payments',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer test_peA2sPzJWKkUHF7y54asBeMtSFKANS',
    },
    data: data,
  };

  const response = await axios.request(config);

  console.log('Mollie API Response:', response.data);
  
  res.json(response.data);
});
function getExpiryDate(month){
  const currentDate = new Date();

// Calculate the expiration date for 1 month
const oneMonthExpiration = new Date(currentDate);
return oneMonthExpiration.setMonth(currentDate.getMonth() + month);

}
const paymentConfirmationHook = catchAsync(async (req, res) => {
  const receivedData = req.body; // The webhook data sent by Mollie

  // Verify the authenticity of the webhook request.
  if (!verifyWebhookSignature(req.headers, req.rawBody)) {
    console.error('Invalid webhook request');
    return res.status(400).send('Invalid request');
  }

  if (receivedData.id && receivedData.resource_type === 'payment') {
    if (receivedData.status === 'paid') {
      console.log(receivedData);
      const paymentAmount = receivedData.amount.value;
      const months=receivedData.metadata.months
     const userId = receivedData.metadata.userId;
   const response=  await User.findByIdAndUpdate(userId,{subscription:{
        status:"active",
        type:`${months}-month`,
        expiresAt:getExpiryDate(months)
      }},{new:true})
      console.log(response);
      console.log(`Payment received for user ${userId} - Amount: ${paymentAmount}`);
    } else if (receivedData.status === 'failed') {
    }
  }

  res.status(200).send('Webhook received');
});





module.exports={
  makePayment,
  paymentConfirmationHook
}