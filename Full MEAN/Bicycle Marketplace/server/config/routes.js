var mongoose = require("mongoose");
var BicycleController = require("../controllers/BicycleController.js");
var UserController = require('../controllers/UserController.js');

module.exports = (app) => {
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/session', UserController.getSession);
    app.get('/api/logout', UserController.logout);
    app.get('/api/user', UserController.find);
    app.post('/api/bikeCreator', UserController.findCreator);
    app.post('/api/newBike', BicycleController.create);
    app.get('/api/allBikes', BicycleController.all);
    app.get('/api/userBikes', BicycleController.userBikes);
    app.patch('/api/updateBike/:bike_id', BicycleController.update);
    app.delete('/api/deleteBike/:bike_id', BicycleController.delete);
    app.post('/api/bikeSearch', BicycleController.search);

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
    
}