var express = require('express');
const Animal_controlers= require('../controllers/Animal');
var router = express.Router();

/* GET Animal page. */
router.get('/', Animal_controlers.Animal_view_all_Page );
module.exports = router;

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

// GET request for one Animal.
router.get('/Animal/:id', Animal_controlers.Animal_detail);
module.exports = router;

/* GET detail Animal page */
router.get('/detail', Animal_controlers.Animal_view_one_Page);


/* GET create Animal page */
router.get('/create', secured,Animal_controlers.Animal_create_Page);


/* GET create update page */
router.get('/update',secured, Animal_controlers.Animal_update_Page);

/* GET create Animal page */
router.get('/delete', secured,Animal_controlers.Animal_delete_Page);
module.exports = router;
