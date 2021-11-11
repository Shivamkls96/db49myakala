var express = require('express');
const Animal_controlers= require('../controllers/Animal');
var router = express.Router();

/* GET Animal page. */
router.get('/', Animal_controlers.Animal_view_all_Page );
module.exports = router;


