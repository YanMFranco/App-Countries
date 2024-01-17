import "../css/CrearActividad.css";
import Header from "./Header";
import { getFull } from "../redux/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import estrella from '../img/estrella2.png';
import { crear_Actividad } from "../redux/action";


const CrearActividad = () => {

    const dispatch = useDispatch();

    let full = useSelector((state) => state.full);

    useEffect(() => {
        dispatch(getFull());
    }, [dispatch]);

    const [idPais, setID] = useState("");
    const [rating, setRating] = useState(0);
    const [input, setInput] = useState({
        "id": [],
        "name": "",
        "difficulty": "",
        "duration": "",
        "season": "",

    });

    const changeHandlerID = (e) => {
        setID(e.target.value);
    };

    const changeHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const agregarID = (e) => {
        e.preventDefault();
        if (idPais === "") {
            alert("Seleccione Pais")
        } else {
            const nuevoID = [...input.id, idPais];
            setInput({ ...input, id: nuevoID });
            alert("Pais agregado con exito");
        }
    };

    const submitHandler = (evento) => {
        evento.preventDefault();
        if (input.id.length === 0 || input.nombre === "" || input.duracion === "" || input.dificultad === 0 || input.temporada === "") {
            return alert("Todos los campos son requeridos")
        }
        dispatch(crear_Actividad({ input }));
        alert('Actividad creada correctamente');
        setInput({
            "id": [],
            "name": "",
            "difficulty": "",
            "duration": "",
            "season": "",

        });
    };

    return (
        <div className="container-CrearActividad">
            <div>
                <Header />
            </div>
            <div>
                <h1>Crear actividad turistica</h1>
                <form>
                    <div>
                        <label htmlFor="id">Nombre del país </label>
                        <select onChange={e => changeHandlerID(e)}>
                            <option value="">---Seleccione---</option>
                            {
                                full.map((nombre) => <option name="name" key={nombre.name} value={nombre.id}>{nombre.name}</option>)
                            }
                        </select><button type="submit" onClick={agregarID}>+</button>
                        <br />
                        <br />
                        <label>Paises seleccionados: </label> {input.id.map((i, index) => <label key={index}> {i} </label>)}
                        <br />
                        <br />
                        <label htmlFor="nombre">Nombre de actividad </label>
                        <input type='text' value={input.name} name='name' onChange={e => changeHandler(e)} /><br />
                        <br />
                        <label className="dificultad" htmlFor="dificultad">Dificultad</label>
                        {[1, 2, 3, 4, 5].map(index => (
                            <img
                                key={index}
                                src={estrella}
                                alt="dificultad"
                                onClick={() => {
                                    setRating(index);
                                    setInput({ ...input, difficulty: index });
                                }}
                                style={{
                                    filter:
                                        rating >= index ? 'grayscale(0%)' : 'grayscale(100%)',
                                    transition: 'filter 0.3s ease-in-out',
                                    cursor: 'pointer',
                                }}
                            />
                        ))}
                        <br />
                        <br />


                        <label htmlFor="duration">Duracion</label>
                        <select name="duration" value={input.duration} onChange={e => changeHandler(e)}>
                            <option name="duration" value="">---Seleccione---</option>
                            <option name="duration" value="De 1 a 2hrs">De 1 a 2hrs</option>
                            <option name="duration" value="De 3 a 8hrs">De 3 a 8hrs</option>
                            <option name="duration" value="e 9 a 15hrs">De 9 a 15hrs</option>
                            <option name="duration" value="De 16 a 20hrs">De 16 a 20hrs</option>
                            <option name="duration" value="De 21 a 24hrs">De 21 a 24hrs</option>
                        </select>
                        <br />
                        <br />

                        <label htmlFor="temporada">Epoca del año</label>
                        <select className="temporada" name="season" value={input.season} onChange={e => changeHandler(e)}>
                            <option name="temporada" value="">--Seleccione--</option>
                            <option name="temporada" value="Todo el año">Año entero</option>
                            <option name="temporada" value="primavera">Primavera</option>
                            <option name="temporada" value="verano">Verano</option>
                            <option name="temporada" value="otoño">Otoño</option>
                            <option name="temporada" value="invierno">Invierno</option>
                        </select>

                        <br />

                        

                    </div>
                    <button type="submit" className='hola' onClick={submitHandler}>Crear actividad</button>
                </form>
                
            </div>
            

        </div>
    )
}

export default CrearActividad;