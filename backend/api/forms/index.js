const mongoose = require('mongoose');
const Form = require('../../models/formModel');  // Updated import path
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    // Handle GET request: Retrieve all forms
    try {
      const forms = await Form.find();
      res.status(200).json(forms);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch forms' });
    }
  } else if (req.method === 'POST') {
    // Handle POST request: Create a new form
    const { name, class: className, report_description } = req.body;
    const newForm = new Form({ name, class: className, report_description });
    try {
      await newForm.save();
      res.status(201).json(newForm);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create form' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
