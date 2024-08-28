const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  requestId: { type: String, required: true, unique: true },
  status: { type: String, required: true, default: 'Processing' },
  productData: { type: Array, required: true },
});

module.exports = mongoose.model('Request', RequestSchema);
