const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//ROTAS-LOGIN
routes.post('/sessions', SessionController.create);

//ROTAS-ONGS
routes.get('/ongs', OngController.list);
routes.post('/ongs', OngController.create);

//ROTAS-INCIDENTS
routes.get('/incidents', IncidentController.list);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//ROTA-PROFILE
routes.get('/profile', ProfileController.list);

module.exports = routes;