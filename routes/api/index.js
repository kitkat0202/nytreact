const router = require('express').Router();
const articleRoutes = require('./articles');

// Article routes
router.use('/saved', articleRoutes);

module.exports = router;
