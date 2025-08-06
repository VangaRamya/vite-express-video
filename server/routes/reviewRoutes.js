const express = require('express');
const router = express.Router();
const { addReview, getReviewsByProduct } = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, addReview);
router.get('/:productId', getReviewsByProduct);

module.exports = router;