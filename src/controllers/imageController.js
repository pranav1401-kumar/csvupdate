const Request = require('../models/Request');
const parseCSV = require('../utils/csvParser');
const processImages = require('../services/imageProcessingService');
const { v4: uuidv4 } = require('uuid');

const uploadCSV = async (req, res) => {
  try {
    const file = req.file;
    const productData = await parseCSV(file.path);
    const requestId = uuidv4();

    await Request.create({ requestId, productData });

    res.status(200).json({ requestId });

    processImages(productData, requestId); // Async processing
  } catch (error) {
    res.status(500).json({ error: 'Failed to process CSV' });
  }
};

module.exports = { uploadCSV };
