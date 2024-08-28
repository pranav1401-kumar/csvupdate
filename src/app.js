const express = require('express');
const connectDB = require('./config/db');
const imageRoutes = require('./routes/imageRoutes');
const statusRoutes = require('./routes/statusRoutes');

const app = express();

app.use(express.json());

connectDB();

app.use('/api/images', imageRoutes);
app.use('/api', statusRoutes);

module.exports = app;
