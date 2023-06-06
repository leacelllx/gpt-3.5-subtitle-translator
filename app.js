const express = require('express');
const openai = require('openai');
const rateLimit = require('express-rate-limit');

// Load environment variables
require('dotenv').config();

openai.apiKey = process.env.OPENAI_KEY;

const app = express();

app.use(express.json());

// Set up rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.post('/translate', async (req, res) => {
    const { text, targetLanguage } = req.body;

    const response = await openai.Completion.create({
        model: 'text-davinci-003',
        prompt: `Translate the following English text to ${targetLanguage}:\n\n${text}`,
        temperature: 0.4,
        max_tokens: 60
    });

    res.json({ translatedText: response.choices[0].text.trim() });
});

app.listen(3000, () => console.log('Server running on port 3000'));
