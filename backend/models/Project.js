const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  score: { type: Number, default: 0 },
});

module.exports = mongoose.model('Project', projectSchema);
