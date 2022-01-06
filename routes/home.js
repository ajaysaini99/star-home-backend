const express = require('express');
const res = require('express/lib/response');

const router = express.Router();

router.get('/', () => {
  res.json('WORKING PERFECTLY FINE');
});

module.exports = router;
