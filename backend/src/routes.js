const express = require("express");
const routes = express.Router(); 

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