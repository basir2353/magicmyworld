import axios from 'axios';

export async function makePayment(data) {
  try {
    const response = await axios.post('http://localhost:8000/payment', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer test_peA2sPzJWKkUHF7y54asBeMtSFKANS',
      },
    });

    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
}
