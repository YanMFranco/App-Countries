import "../css/ordenamiento.css";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from '../redux/action';
import { useEffect } from "react";

const Ordenamiento = ({ onOrderAlphabetical, onOrderPoblacion, onOrderContinente, onOrderActividad }) => {

    const dispatch = useDispatch();

    const actividades = useSelector((state) => state.actividades);

    useEffect(() => {
        dispatch(getTodo());
    }, [dispatch]);

    const nombresUnicos = new Set();

    actividades.forEach(ciudad => {
        nombresUnicos.add(ciudad.name);
    });

    const nombresUnicosArray = [...nombresUnicos];

    return (
        <div className="container-Ordenamiento">
            <div>
                <h2>Orden Alfabetico </h2>
                <select className="" onChange={(e) => onOrderAlphabetical(e.target.value)}>
                    <option value="">---Aleatorio---</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select></div>
            <div>
                <h2>Poblacion </h2>
                <select onChange={(e) => onOrderPoblacion(e.target.value)}>
                    <option value="">---Aleatorio---</option>
                    <option value="desc">Mayor poblacion</option>
                    <option value="asc">Menor poblacion</option>
                </select>
            </div>
            <div>
                <h2>Continente </h2>
                <select onChange={(e) => onOrderContinente(e.target.value)}>
                    <option value="">---Aleatorio---</option>
                    <option value='todos'>Todos los continentes</option>
                    <option value='Africa'>Africa</option>
                    <option value='Antarctica'>Antarctica</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='North America'>North America</option>
                    <option value='Oceania' >Oceania</option>
                    <option value='South America'>South America</option>
                </select>
            </div>
            <div>
                <h2>Actividad Turistica</h2>
                <select onChange={(e) => onOrderActividad(e.target.value)}>
                    <option value="">---Todos---</option>
                    {
                        nombresUnicosArray.map((nombre) => <option name="nombre" key={nombre} value={nombre}>{nombre}</option>)
                    }
                </select>
            </div>
        </div>
    )
}

export default Ordenamiento;