import { GET_CIUDADES, GET_PORNOMBRE, GET_FILTROS, GET_ACTIVIDADES , GET_CIUDADDETALLE } from "./action";

const initialState = {
    ciudadesBD: [],
    actividades: [],
    ciudadesDetalle: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CIUDADES:
            return {
                ...state,
                ciudadesBD: action.payload,
            };
        case GET_PORNOMBRE:
            return {
                ...state,
                ciudadesBD: action.payload,
            }
        case GET_FILTROS:
            return {
                ...state,
                ciudadesBD: action.payload,
            }
        case GET_ACTIVIDADES:
            return {
                ...state,
                actividades: action.payload,
            }
        case GET_CIUDADDETALLE:
            return {
                ...state,
                ciudadesDetalle: action.payload,
            }
        default:
            return { ...state };
    }
}

export default rootReducer;