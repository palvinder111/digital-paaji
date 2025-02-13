const reviewModel = require('../models/reviewModel');

// Controller to fetch reviews
exports.getReviews = async (req, res) => {
  try {
    const reviews = await reviewModel.fetchReviews(); // Call the model function
    res.json(reviews); // Send the reviews as a response
  } catch (err) {
    res.status(500).json({ error: 'Error Fetching Reviews', details: err.message });
  }
};
