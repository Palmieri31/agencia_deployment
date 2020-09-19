const express = require('express');
const router = express.Router();

const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function() {
    router.get('/', homeController.homeInfo);
    router.get('/nosotros', nosotrosController.NosotrosInfo);
    router.get('/viajes', viajesController.viajesMostrar);
    router.get('/viajes/:id', viajesController.viajeMostrar);
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    router.post('/testimoniales', testimonialesController.agregarTestimonial);
   
    return router;
}