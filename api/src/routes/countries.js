const { Router } = require('express');
const obtenerPais = require('../controller/countriesAll');
const obtenerById = require('../controller/countriesById');
const paisesFiltros = require('../controller/filtros');

const routerCountries = Router();

routerCountries.get("/", async (req, res) => {
    try {
        const { page , nombre} = req.query;
        const countries = await obtenerPais(page,nombre);
        res.status(200).send(countries);
    } catch (error) {
        res.status(400).send(error.message);
    }

})

routerCountries.get("/ID/:id", async (req,res)=> {
    try {
        const { id } = req.params;
        const idMayuscula = id.toUpperCase();
        const countries = await obtenerById(idMayuscula);
        res.status(200).send(countries);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

routerCountries.get('/filtros', async (req, res) => {
    try {
        var {page,fA_Z,fPo,fCo} = req.query;
        fCo = fCo || 'todos';
        const filtros = await paisesFiltros(page,fA_Z,fPo,fCo);
        res.status(200).send(filtros);
    } catch (error) {
        res.status(400).send(error.message)
    }
});



module.exports = routerCountries;