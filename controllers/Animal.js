var Animal = require('../models/Animal');
// List of all Animals
exports.Animal_list = function(req, res) {
res.send('NOT IMPLEMENTED: Animal list');
};

// for a specific Animal.
exports.Animal_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Animal detail: ' + req.params.id);
};

// Handle Animal create on POST.
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


// Handle Animal delete form on DELETE.
exports.Animal_delete = async function(req, res) 
{
    console.log("delete " + req.params.id)
    try {
    result = await Animal.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};
 
// Handle Animal update form on PUT.
exports.Animal_update_put =  async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Animal.findById( req.params.id)
// Do updates of properties
if(req.body.Name)toUpdate.Name = req.body.Name;
if(req.body.Breed)toUpdate.Breed = req.body.Breed;
if(req.body.Age)toUpdate.Age = req.body.Age;
let result = await toUpdate.save(); 
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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



// for a specific Animal.
exports.Animal_detail = async function(req, res) 
{
    console.log("detail" + req.params.id)
    try {
    result = await Animal.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle a show one view with id specified by query
exports.Animal_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Animal.findById( req.query.id)
    res.render('Animaldetail',
    { title: 'Animal Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }


// Handle building the view for creating a Animal.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Animal_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Animalcreate', { title: 'Animal Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


// Handle building the view for updating a Animal. 
// query provides the id 
exports.Animal_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Animal.findById(req.query.id) 
        res.render('Animalupdate', { title: 'Animal Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};


// Handle a delete one view with id from query
exports.Animal_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Animal.findById(req.query.id)
    res.render('Animaldelete', { title: 'Animal Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };




