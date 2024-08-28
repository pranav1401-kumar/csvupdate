const axios = require('axios');
const sharp = require('sharp');

const compressImage = async (url) => {
  const response = await axios({ url, responseType: 'arraybuffer' });
  const compressedBuffer = await sharp(response.data)
    .jpeg({ quality: 50 })
    .toBuffer();
  return compressedBuffer;
};

module.exports = compressImage;
