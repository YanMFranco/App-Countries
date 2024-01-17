import React from "react";
import '../css/countries.css';
import {Link} from 'react-router-dom';

const Countries = ({ id, name, img, continet }) => {
    return (
        <div className="contenedor-countries">
            <div className="card">
                <Link to={`/Ciudad/${id}`}><img src={img} alt="Img Not Found" /></Link>
                <h1>{name}</h1>
                <h2><span className="continente">Continente: {continet}</span></h2>
            </div>
        </div>
    )
}

export default Countries;