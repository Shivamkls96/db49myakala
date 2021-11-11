var Animal = require('../models/Animal');
// List of all Costumes
exports.Animal_list = function(req, res) {
res.send('NOT IMPLEMENTED: Animal list');
};

// for a specific Costume.
exports.Animal_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Animal detail: ' + req.params.id);
};

// Handle Gas create on POST.
exports.Animal_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Animal();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gas_type":"regular", "quantity":13, "cost":43.56}
    document.Name = req.body.Name;
    document.Breed = req.body.Breed;
    document.Age = req.body.Age;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle Costume delete form on DELETE.
exports.Animal_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Animal delete DELETE ' + req.params.id);
};

// Handle Costume update form on PUT.
exports.Animal_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Animal update PUT' + req.params.id);
};

// List of all Animal
exports.Animal_list = async function (req, res) {
    try {
        theAnimal = await Animal.find();
        res.send(theAnimal);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view 
exports.Animal_view_all_Page = async function(req, res) {
    try{
        theAnimal = await Animal.find();
        res.render('Animal', { title: 'Animal Search Results', results: theAnimal });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };