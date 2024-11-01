const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact');


router.get('/:id', contactController.getByID);
router.put('/:id', contactController.update);
router.delete('/:id', contactController.delete);
router.get('/', contactController.list);
router.post('/', contactController.create);

module.exports = router;