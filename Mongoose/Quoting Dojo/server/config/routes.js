var users = require('../controllers/users.js');

module.exports = function(app){
    app.get('/', users.index);
    app.post('/create', users.create);
    app.get('/quotes', users.main);
}