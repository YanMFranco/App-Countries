const axios = require("axios");
const url = "https://restcountries.com/v3/all";
const { Country , Tourism } = require("../db");
const { Op } = require("sequelize");

const obtenerPais = async (page , nombre) => {
    try {
        if (!page) { return "Pagina es requerido"}
        let db = await Country.findAll({ include: [{ model: Tourism }] });
        const limit = 10;
        const offset = (page - 1) * limit;

        if (!db.length) {
            const paisesAll = axios.get(url);
            const paisesRes = await paisesAll.then((response) => (response.data));
            const paisesResumen = paisesRes.map(info => {
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
            await Country.bulkCreate(paisesResumen);
        }

        let total = await Country.count();
        let pagesMaxima = Math.ceil(total / limit);

        if (!nombre) {
            if (page > pagesMaxima || page == 0) { return "Paginado fuera de rango maximo" }
            return {
                paginadoMaximo: pagesMaxima, datos: db = await Country.findAll({
                    include: [{ model: Tourism }],
                    limit: limit,
                    offset: offset
                })
            }
        } else {
            let busqueda = await Country.findAll(
                {
                    where: {
                        name: { [Op.iLike]: `%${nombre}%` }
                    },
                    include: [{ model: Tourism }]
                });
            if (!busqueda.length) {
                return "No se encontraron coincidencias"
            } else {
                total = busqueda.length;
                pagesMaxima = Math.ceil(total / limit);
                if (page > pagesMaxima || page == 0) { return "Paginado fuera de rango maximo" }
                return {
                    paginadoMaximo: pagesMaxima, datos: busqueda = await Country.findAll(
                        {
                            where: {
                                name: { [Op.iLike]: `%${nombre}%` }
                            },
                            include: [{ model: Tourism }],
                            limit: limit,
                            offset: offset
                        })
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = obtenerPais;