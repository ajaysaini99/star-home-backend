const express = require('express');
const res = require('express/lib/response');

const router = express.Router();

const { getHomes, addHome, updateHome } = require('./../controllers/home');

router.get('/', getHomes);
router.post('/', addHome);
router.put('/', updateHome);
module.exports = router;
