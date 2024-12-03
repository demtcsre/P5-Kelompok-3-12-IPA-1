const mongoose = require('mongoose');
const Form = require('../../models/formModel');  // Updated import path
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = async (req, res) => {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Handle GET request: Retrieve a form by ID
    try {
      const form = await Form.findById(id);
      if (!form) {
        return res.status(404).json({ error: 'Form not found' });
      }
      res.status(200).json(form);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch form' });
    }
  } else if (req.method === 'DELETE') {
    // Handle DELETE request: Delete a form by ID
    try {
      const form = await Form.findByIdAndDelete(id);
      if (!form) {
        return res.status(404).json({ error: 'Form not found' });
      }
      res.status(200).json({ message: 'Form deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete form' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
