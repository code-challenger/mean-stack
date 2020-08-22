var mongooses = require('../controllers/mongooses.js');

module.exports = function(app){
    app.get('/', mongooses.index);
    app.get('/mongoose/:id', mongooses.getMongoose);
    app.get('/new', mongooses.new);
    app.post('/create', mongooses.create);
    app.get('/edit/:id', mongooses.edit);
    app.post('/editMongoose/:id', mongooses.editMongoose);
    app.get('/destroy/:id', mongooses.destroy);
}