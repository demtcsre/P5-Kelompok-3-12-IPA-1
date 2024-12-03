const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables

const app = express();

// Middleware
app.use(express.json());  // To parse incoming JSON requests

// Connect to MongoDB using the URI stored in the .env file
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Default route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Listen on the port (use process.env.PORT for Vercel)
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});