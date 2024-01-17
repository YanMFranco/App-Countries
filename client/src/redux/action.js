import axios from "axios";

export const GET_CIUDADES = "GET_CIUDADES";
export const GET_PORNOMBRE = "GET_PORNOMBRE";
export const GET_FILTROS = "GET_FILTROS";
export const GET_ACTIVIDADES ="GET_ACTIVIDADES";
export const GET_CIUDADDETALLE = "GET_CIUDADDETALLE";
export const GET_FULL = "GET_FULL";

export const getCiudades = (page) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/countries?page=${page}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_CIUDADES, payload: data }));
  };
};

export const getPor_Nombre = (page,nombre) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/countries?page=${page}&nombre=${nombre}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_PORNOMBRE, payload: data }));
  };
};

export const getFiltros = (page,orderA_Z,orderP,orderC) => {
  orderA_Z = orderA_Z.toUpperCase();
  orderP = orderP.toUpperCase();
  var ordenA = !orderA_Z?"":`&fA_Z=${orderA_Z}`; 
  var ordenPo = !orderP?"":`&fPo=${orderP}`;
  var ordenCo = !orderC?"":`&fCo=${orderC}`;

  return function (dispatch) {
    axios
      .get(`http://localhost:3001/countries/filtros?page=${page}${ordenPo}${ordenA}${ordenCo}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_FILTROS, payload: data }));
  };
}

export const getTodo = () => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/tourism/activities`)
      .then((response)=>response.data)
      .then((data)=>dispatch({type: GET_ACTIVIDADES , payload:data}))
  }
}

export const getCiudadDetalle = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/countries/ID/${id}`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_CIUDADDETALLE, payload: data }));
  };
}

export const getFull = () => {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/countries/todo`)
      .then((response) => response.data)
      .then((data) => dispatch({ type: GET_FULL, payload: data }));
  };
};

export const crear_Actividad = ({ input }) => {
  return async function () {
    const res = await axios.post(`http://localhost:3001/tourism`, input)
  }
}
