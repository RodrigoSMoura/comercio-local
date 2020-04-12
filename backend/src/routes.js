const express = require("express");

const ComercioController = require("./controllers/ComercioController");
const StateController = require("./controllers/StateController");
const CityController = require("./controllers/CityController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router(); 

routes.post("/sessions", SessionController.create);

routes.get("/states", StateController.index);
routes.get("/states/:uf/cities", StateController.cidades);
routes.put("/states/update", StateController.update);

routes.get("/cities", CityController.index);
routes.put("/cities/update", CityController.update);

routes.get("/comercios", ComercioController.index);
routes.post("/comercios", ComercioController.create);
routes.put("/comercios/status", ComercioController.change_status);


routes.post("/users/:id", (request, response) => {
    
    const queryParams = request.query; // Query params
    const routeParams = request.params; // Route params
    const body = request.body;

    console.log(queryParams);
    console.log(routeParams);
    console.log(body);

    return response.json({ 
        nome: "Hello World",
        //id: request.params.id
    });
});

module.exports = routes;