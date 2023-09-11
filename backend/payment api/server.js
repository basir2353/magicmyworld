const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.post('/payment', async (req, res) => {
  try {
    const { amount } = req.body;

    if (typeof amount !== 'number' || isNaN(amount)) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    let data = JSON.stringify({
      amount: {
        currency: "EUR",
        value: amount.toFixed(2),
      },
      description: "Payment For Unlimited credits",
      redirectUrl: "https://example.com", // Update with your actual redirect URL
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
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error('Mollie API Error:', error.response.data);
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
