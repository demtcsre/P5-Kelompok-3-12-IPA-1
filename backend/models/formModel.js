const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  report_description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.models.Form || mongoose.model('Form', formSchema);