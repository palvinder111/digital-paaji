const express = require('express');
const { getReviews } = require('../controllers/reviewControllers');

const router = express.Router();

// Route to fetch reviews
router.get('/', getReviews);

module.exports = router;
