import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/submit', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/contacts',
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY,
        },
      }
    );

    return res.status(200).json({ message: 'Submitted successfully', data: response.data });
  } catch (error) {
    console.error('Error submitting to Brevo:', error?.response?.data || error.message);
    return res.status(500).json({ message: 'Brevo API error', error: error?.response?.data });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
