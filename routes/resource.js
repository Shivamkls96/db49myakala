var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Animal_controller = require('../controllers/Animal');

/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// gas ROUTES ///
// POST request for creating a Animal.
router.post('/resource/Animal', Animal_controller.Animal_create_post);
// DELETE request to delete Animal.
router.delete('/resource/Animal/:id', Animal_controller.Animal_delete);
// PUT request to update Animal.
router.put('/resource/Animal/:id', Animal_controller.Animal_update_put);
// GET request for one Animal.
router.get('/resource/Animal/:id', Animal_controller.Animal_detail);
// GET request for list of all Animal items.
router.get('/resource/Animal', Animal_controller.Animal_list);
module.exports = router;