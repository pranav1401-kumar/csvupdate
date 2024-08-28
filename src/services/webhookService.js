const axios = require('axios');

const triggerWebhook = async (webhookUrl, data) => {
  try {
    await axios.post(webhookUrl, data);
    console.log('Webhook triggered successfully');
  } catch (error) {
    console.error('Error triggering webhook:', error);
  }
};

module.exports = triggerWebhook;
