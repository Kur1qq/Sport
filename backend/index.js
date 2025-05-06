const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const PORT = process.env.PORT || 9000;

mongoose.connect('mongodb+srv://gnbkk13:OaCtQyM73mEWUBII@cluster0.jof9ijx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const databaseSeeder = require('./databaseSeeder');
app.use('/api/seed', databaseSeeder);





app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
