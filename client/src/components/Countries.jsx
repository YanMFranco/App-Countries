import React from "react";
import '../css/countries.css';

const Countries = ({ id, name, img, continet }) => {
    return (
        <div className="contenedor-countries">
            <div className="card">
                <img src={img} alt="Img Not Found" />
                <h1>{name}</h1>
                <h2><span className="continente">Continente: {continet}</span></h2>
            </div>
        </div>
    )
}

export default Countries;