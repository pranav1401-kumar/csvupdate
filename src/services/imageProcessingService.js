const compressImage = require('../utils/imageCompressor');
const triggerWebhook = require('./webhookService');
const Request = require('../models/Request');

const processImages = async (productData, requestId) => {
  for (const product of productData) {
    const outputImageUrls = [];
    for (const url of product['Input Image Urls'].split(',')) {
      const compressedImage = await compressImage(url.trim());
      // Assume we upload this compressed image to some storage and get a new URL
      const outputUrl = 'https://compressed-image-url.jpg'; // Placeholder
      outputImageUrls.push(outputUrl);
    }
    product['Output Image Urls'] = outputImageUrls.join(',');
  }

  await Request.findOneAndUpdate({ requestId }, { status: 'Completed', productData });

  const request = await Request.findOne({ requestId });
  triggerWebhook('https://webhook.site/60b8bb69-7fbb-410a-895e-66fa0c8b5878', request);
};

module.exports = processImages;
