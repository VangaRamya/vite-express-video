const Review = require('../models/Review');

const addReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;
    const review = await Review.create({
      product: productId,
      user: req.user._id,
      rating,
      comment,
    });
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit review', error: err.message });
  }
};

const getReviewsByProduct = async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId }).populate('user', 'username');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch reviews', error: err.message });
  }
};

module.exports = { addReview, getReviewsByProduct };