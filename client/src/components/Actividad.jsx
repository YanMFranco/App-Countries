import estrella from '../img/estrella2.png';
import { useState } from "react";
import "../css/Actividad.css"

const Actividad = ({ id, nombre, dificultad, duracion, temporada, }) => {

    const numRepeticiones = dificultad;

    const imagenes = Array.from({ length: numRepeticiones }, (_, index) => (
        <img key={index} src={estrella} alt="dificultad" />
    ));

    return (
        <div className="container-Actividad">
            <h2>Nombre de actividad: <span>{nombre} </span></h2>
            <h2>Dificultad: <span>{imagenes}</span></h2>
            <h2>Duracion: <span>{duracion}</span></h2>
            <h2>Temporada: <span>{temporada}</span></h2>
            <hr />
        </div>
    )
}

export default Actividad;