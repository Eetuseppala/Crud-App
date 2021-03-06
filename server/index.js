import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import nodemon from 'nodemon';

import dotenv from 'dotenv';
dotenv.config();

import postRoutes from './routes/posts.js';

const app = express();

app.use(cors());

app.use(bodyParser.json( { limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded( { limit: "30mb", extended: true }));

app.use('/posts', postRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => app.listen( PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch( (error) => console.log(error.message));

