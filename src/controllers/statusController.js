const Request = require('../models/Request');

const getStatus = async (req, res) => {
  try {
    const { requestId } = req.params;
    const request = await Request.findOne({ requestId });

    if (!request) {
      return res.status(404).json({ error: 'Request not found' });
    }

    res.status(200).json({ status: request.status, productData: request.productData });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get status' });
  }
};

module.exports = { getStatus };
