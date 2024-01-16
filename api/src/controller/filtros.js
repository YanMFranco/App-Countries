const axios = require('axios');
const { Country, Tourism } = require("../db");
const url = "https://restcountries.com/v3.1/all";

const filtros = async (page,fA_Z,fPo,fCo) => {
    try {
        console.log(page);
        console.log(fA_Z);
        console.log(fPo);
        console.log("Paso por controller");
        if (!page) { return "Pagina es requerida" }
        const limit = 10;
        const offset = (page - 1) * limit;
        let db = await Country.findAll({ include: [{ model: Tourism }] });

        if (!db.length) {
            const paisesAll = axios.get(url);
            const paisesRes = await paisesAll.then((response) => (response.data));
            const paisesDetalle = paisesRes.map(info => {
                return {
                    id: info.cca3,
                    name: info.name.common,
                    img: info.flags[1],
                    continet: info.continents[0],
                    capital: info.capital != null ? info.capital[0] : "Sin informacion",
                    subregion: info.subregion != null ? info.subregion : "Sin informacion",
                    area: info.area,
                    population: info.population,
                }
            });
            Country.bulkCreate(paisesDetalle);
        }
        
        let total = await Country.count();

        if (fCo=="todos") {
            total = await Country.count();
        }

        if (fCo!="todos") {
            total = await Country.count({
                where: {
                    continet:fCo
                }
            });
        }

        
        let pagesMaxima = Math.ceil(total / limit);
        let orderAZ=[];
        let orderPo=[];
        
        if(fA_Z!==undefined){
            orderAZ = (fA_Z==="ASC") ? [['name', 'ASC']] : [['name', 'DESC']];
        }
        if(fPo!==undefined){
            orderPo = (fPo==="ASC") ? [['population', 'ASC']] : [['population', 'DESC']];
        }

        if(fCo==="todos"){
            db = await Country.findAll({
                include: [{ model: Tourism }],
                limit: limit,
                offset: offset,
                order: [
                    ...(orderPo || []),
                    ...(orderAZ || []),
                ]
            })
        }else{
            console.log("ingrese aqui");
            console.log(orderPo);
            db = await Country.findAll({
                include: [{ model: Tourism }],
                where: {
                    continet: fCo
                },
                limit: limit,
                offset: offset,
                order: [
                    ...(orderAZ || []),
                    ...(orderPo || []),
                ]
        })
        }
        
        return { paginadoMaximo: pagesMaxima, datos: db };

    } catch (error) {
        console.log(error);
    }
}

module.exports = filtros;