var express = require('express');
const Animal_controlers= require('../controllers/Animal');
var router = express.Router();

/* GET Animal page. */
router.get('/', Animal_controlers.Animal_view_all_Page );
module.exports = router;

// GET request for one Animal.
router.get('/Animal/:id', Animal_controlers.Animal_detail);
module.exports = router;

/* GET detail Animal page */
router.get('/detail', Animal_controlers.Animal_view_one_Page);


/* GET create Animal page */
router.get('/create', Animal_controlers.Animal_create_Page);


/* GET create update page */
router.get('/update', Animal_controlers.Animal_update_Page);

/* GET create Animal page */
router.get('/delete', Animal_controlers.Animal_delete_Page);
module.exports = router;
