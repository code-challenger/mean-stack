var users = require('../controllers/users.js');
var comments = require('../controllers/comments.js');

module.exports = function(app){
    app.get('/', users.index);
    app.post('/newMessage', users.newMessage);
    app.post('/newComment/:id', users.newComment);
}