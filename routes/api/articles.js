const router = require('express').Router();
const articlesController = require('../../controllers/articleController');

// Matches with "/api/saved"
router
  .route('/')
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/articles/:id"
router
  .route('/:id')
  .delete(articlesController.remove);

module.exports = router;
