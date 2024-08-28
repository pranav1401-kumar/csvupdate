const express = require('express');
const { uploadCSV } = require('../controllers/imageController');
const uploadMiddleware = require('../middlewares/uploadMiddleware');

const router = express.Router();

router.post('/upload', uploadMiddleware.single('file'), uploadCSV);

module.exports = router;
