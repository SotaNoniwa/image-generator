import express from 'express';
import { config as dotenvConfig } from 'dotenv';
import openai from './routes/openaiRoutes.js';

const app = express();
dotenvConfig();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/openai', openai);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
