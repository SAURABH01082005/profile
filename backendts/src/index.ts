import dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import profileRoute from './routes/profile.route';

import {verifyConnection} from './config/email.config'
import cors from 'cors';



const app = express();

const port = process.env.PORT || 5000;

//config
verifyConnection();

//middlewares

app.use(express.json());
app.use(cors());

//endpoints

// app.use('/api/patient', patientRoute);
app.use("/api/profile", profileRoute);

//localhost:5000/

app.get('/', (req, res) => {
    res.send('Api is running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});