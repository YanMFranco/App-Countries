import '../css/home.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCiudades, getPor_Nombre, getFiltros, getTodo } from '../redux/action';
import Countries from './Countries';
import Cargando from './Caragando';
import Ordenamiento from './Ordenamiento';
import Header from './Header';

const Home = () => {

    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    const [nombre, setSearch] = useState('');
    const [filtrarA_Z, setFiltrar] = useState('');
    const [filtrarP, setFiltrarP] = useState('');
    const [filtrarCo, setFiltrarCo] = useState('');
    const [filtrarActi, setFiltrarActi] = useState('');

    let ciudadesBD = useSelector((state) => state.ciudadesBD);
    const actividades = useSelector((state) => state.actividades);
    let pageMax = useSelector((state) => state.ciudadesBD.paginadoMaximo);

    useEffect(() => {
        if (!nombre && !filtrarA_Z) {
            dispatch(getCiudades(page));
        }
        if (filtrarA_Z !== "" || filtrarP !== "" || filtrarCo !== "") {
            dispatch(getFiltros(page, filtrarA_Z, filtrarP, filtrarCo));
        } if (filtrarActi !== "") {
            dispatch(getTodo())
        } else {
            dispatch(getPor_Nombre(page, nombre));
        }
    }, [dispatch, page, nombre, filtrarA_Z, filtrarP, filtrarCo, filtrarActi]);

    const prevHandler = () => {
        if (page === 1) {
            alert("No puedes retrocedermás")
        } else {
            setPage(page - 1);
        }
    }

    const nextHandler = () => {
        if (page >= pageMax) {
            alert("No puedes avanzar más")
        } else {
            setPage(page + 1)
        }
    }

    const countrisRefresh = () => {
        setPage(1);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        setPage(1);
    }

    const handleOrderAlphabetical = (value) => {
        if (filtrarP) {
            return alert("No puedes convinar orden alfabetico con poblacion")
        }
        setFiltrar(value);
        setPage(1);
        setSearch("");
    };

    const handleOrderPopulation = (value) => {
        if (filtrarA_Z) {
            return alert("No puedes convinar orden por poblacion con alfabetico");
        }
        setFiltrarP(value);
        setPage(1);
        setSearch("");
    }

    const handleOrderContinet = (value) => {
        setFiltrarCo(value);
        setPage(1);
        setSearch("");
    }

    const handleOrderActividad = (value) => {
        setFiltrarActi(value);
        setPage(1);
        setSearch("");
    }

    const actividadFiltrada = actividades.filter((acti) => acti.name == filtrarActi);
    const nuevoAc = actividadFiltrada.map((nw) => nw.countries);
    const acF = nuevoAc.map(item => item[0])

    return (
        <div className="contenedor-home">
            <Header />
            <h1>CountriesAPP</h1>

            <Ordenamiento onOrderAlphabetical={handleOrderAlphabetical} onOrderPoblacion={handleOrderPopulation} onOrderContinente={handleOrderContinet} onOrderActividad={handleOrderActividad} />

            <div className="barraBuscar">
                <h2>Buscar por nombre/ID</h2> <input type="text" value={nombre} onChange={handleSearch} placeholder="Nombre del pais" />
            </div>

            <div className="botones">
                <div><button onClick={prevHandler}>PREV</button></div>
                <div><button onClick={countrisRefresh}>Pagina {`${page}`}</button></div>
                <div><button onClick={nextHandler}>NEXT</button></div>
            </div>

            <div className="datos">
                {filtrarActi ? acF.map(
                    (ciudad) => <Countries
                        key={ciudad.id}
                        id={ciudad.id}
                        name={ciudad.name}
                        img={ciudad.img}
                        continet={ciudad.continet}
                    />
                ) : !ciudadesBD.datos ? <Cargando /> : ciudadesBD.datos.map(
                    (ciudad) => <Countries
                        key={ciudad.id}
                        id={ciudad.id}
                        name={ciudad.name}
                        img={ciudad.img}
                        continet={ciudad.continet}
                    />
                )
                }

            </div>

            <div className="botones">
                <div><button onClick={prevHandler}>PREV</button></div>
                <div><button onClick={countrisRefresh}>Pagina {`${page}`}</button></div>
                <div><button onClick={nextHandler}>NEXT</button></div>
            </div>

        </div>
    )
}

export default Home;