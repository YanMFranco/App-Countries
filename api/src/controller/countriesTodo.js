const axios = require('axios');
const { Country, Tourism } = require("../db");
const url = "https://restcountries.com/v3.1/all";

const todosPaises = async () => {
    try {

        let db = await Country.findAll({ include: [{ model: Tourism }] });

        if (!db.length) {
            const paisesAll = axios.get(url);
            const paisesRes = await paisesAll.then((response) => (response.data));
            /*console.log("**");
            console.log(paisesRes[0].flags["png"]);
            console.log("**");*/
            const paisesResumen = paisesRes.map(info => {
                return {
                    id: info.cca3,
                    name: info.name.common,
                    img: info.flags["png"],
                    continet: info.continents[0],
                    capital: info.capital != null ? info.capital[0] : "Sin informacion",
                    subregion: info.subregion != null ? info.subregion : "Sin informacion",
                    area: info.area,
                    population: info.population,
                }
            });
            
            await Country.bulkCreate(paisesResumen);
        }

        db = await Country.findAll(
            {
                include: [{ model: Tourism }],
                order: [['name', 'ASC']]
            })

        return db;

    } catch (error) {
        console.log(error);
    }
}

module.exports = todosPaises;