const express = require('express');
const router = express.Router();

const usersController = require('../controllers/user');


router.get('/:id', usersController.getById);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);
router.get('/', usersController.list);
router.post('/', usersController.create);

module.exports = router;