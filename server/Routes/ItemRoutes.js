const { createItem, getAllItem, getItemById, getItemByUserId } = require('../Controller/ItemCreateController');
const { Authentication } = require('../Middleware/Auth');

const itemRoute = require('express').Router();


itemRoute.post('/createItem' , Authentication , createItem);
itemRoute.post('/getallitem' , Authentication , getAllItem);
itemRoute.post('/getitembyid/:id' , Authentication , getItemById);
itemRoute.post('/getitembyuserid/:id' , Authentication , getItemByUserId);

module.exports = itemRoute;