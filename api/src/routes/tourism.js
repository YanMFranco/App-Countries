const { Router } = require('express');
const { Tourism, Country } = require('../db.js');

const routerTourism = Router();

routerTourism.get('/activities', async (req, res) => {
    try {
        const activities = await Tourism.findAll({
            include: Country
        })
        return res.json(activities)
    } catch (error) {
        res.status(400).send(error.message);
    }
})

routerTourism.post("/", async (req, res) => {
    try {
        const { name, difficulty, duration, season, id } = req.body;
        if (!name && !difficulty && !duration && !season && !id) return res.status(400).send(JSON.stringify("FALTAN DATOS"));
        const obj = { name, difficulty, duration, season };
        const newActivity = await Tourism.create(obj);
        await newActivity.addCountry(id);
        const busqueda = await Country.findAll({ where: { id: id }, include: [{ model: Tourism }] });
        console.log(busqueda);
        res.status(200).send("Actividad creada correctamente en " + id);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = routerTourism;