const { createItem, getAllItem, getItemById, getItemByUserId } = require('../Controller/ItemCreateController');
const { Authentication } = require('../Middleware/Auth');

const itemRoute = require('express').Router();


itemRoute.post('/createitem' , Authentication , createItem);
itemRoute.get('/getallitem' , Authentication , getAllItem);
itemRoute.get('/getitembyid/:id' , Authentication , getItemById);
itemRoute.get('/getitembyuserid/:id' , Authentication , getItemByUserId);

module.exports = itemRoute;