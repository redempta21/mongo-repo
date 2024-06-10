
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const { connection } = require('mongoose');


app.use(express.json());  

let items = [];

//mongodb connection

const mongoURI = process.env.MONGODB_URI;
 console.log('MongoDB URI:', mongoURI);

 if (!mongoURI) {
    console.error('MONGODB_URI  is not set');
    process.exist(1);
 }
mongoose.connect(mongoURI).then(() => {
    console.log('Connected to mongoDB');


}).catch((error) => {
    console.log('error connecting to mongoDB',error)
});

const itemRoutes = require('./Routes/itemRoutes');

app.use('/api',itemRoutes);


const port = process.env.PORT || 4000
app.listen(port, () => 
  console.log(`Server running on port ${port}`)
);
