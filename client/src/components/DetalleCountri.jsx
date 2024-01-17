import "../css/DetalleCountri.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCiudadDetalle } from "../redux/action";
import { useParams } from 'react-router-dom';
import Actividad from "./Actividad";

const DetalleCountri = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const countryDetalle = useSelector((state) => state.ciudadesDetalle);

    useEffect(() => {
        dispatch(getCiudadDetalle(id));
    }, [dispatch, id]);

    console.log(countryDetalle.tourisms);

    return (
        <div className="container-Detalle">
            <div className="item1">
                <h2><span className="titulos" >ID:</span> {countryDetalle.id}</h2>
                <img src={`${countryDetalle.img}`} alt={`Bandera de ${countryDetalle.name}`} />
            </div>

            <div className="item2">
                <div>
                    <h2><span className="titulos" >Nombre:</span>{countryDetalle.name}</h2>
                    <h2><span className="titulos" >Continente:</span> {countryDetalle.continet}</h2>
                    <h2><span className="titulos" >Subregion: </span>{countryDetalle.subregion}</h2>
                </div>
                <div>
                    <h2><span className="titulos" >Capital: </span>{countryDetalle.capital}</h2>
                    <h2><span className="titulos" >Area: </span>{countryDetalle.area}</h2>
                    <h2><span className="titulos" >Poblacion: </span>{countryDetalle.population}</h2>
                </div>
            </div>

            <div className="item3">
                <h2><span className="titulos" >Actividades turisticas: </span>{
                    countryDetalle.tourisms ?
                        countryDetalle.tourisms.length === 0 ? " No hay datos"
                            : countryDetalle.tourisms.map((info) => <Actividad
                                key={info.id}
                                id={info.id}
                                nombre={info.name}
                                dificultad={info.difficulty}
                                duracion={info.duration}
                                temporada={info.season}
                            />)
                        : "Cargando"}
                </h2>
            </div>

        </div>
    )
};

export default DetalleCountri;