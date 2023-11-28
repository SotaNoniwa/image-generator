import express from 'express';
import { config as dotenvConfig } from 'dotenv';
import cors from "cors";
import openai from './routes/openaiRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
dotenvConfig();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);

app.use('/openai', openai);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
