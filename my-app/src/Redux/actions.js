import axios from "axios";
export const LOGIN_SUCESS = "Login/sucess";
export const LOGOUT = "Logout";
export const GET_DATA_HOME = "get/data/homepage";
export const GET_MOVIES = "get/movies";
export const GET_DATA_TV = "get/data/tv";
export const GET_DATA_MOVIES = "get/data/movies";

export const FILTER = "filter";
// login logout

export const login = () => {
  return { type: LOGIN_SUCESS };
};

export const logout = () => {
  return { type: LOGOUT };
};

// filter methids

export const filterdata = (payload) => {
  return { type: FILTER, payload };
};

// data fetch
export const getdatahome = () => (dispatch) => {
  axios.get("http://localhost:8080/homepage").then((r) => {
    dispatch({
      type: GET_DATA_HOME,
      payload: r.data,
    });
  });
};

export const getdatatv = () => (dispatch) => {
  axios.get("http://localhost:8080/tvshows").then((r) => {
    dispatch({
      type: GET_DATA_TV,
      payload: r.data,
    });
  });
};

export const getdatamovie = () => (dispatch) => {
  axios.get("http://localhost:8080/movies").then((r) => {
    dispatch({
      type: GET_DATA_MOVIES,
      payload: r.data,
    });
  });
};

export const getmovies = () => (dispatch) => {
  axios.get("http://localhost:8080/allmovies").then((r) => {
    console.log(r.data);
    dispatch({
      type: GET_MOVIES,
      payload: r.data,
    });
  });
};
