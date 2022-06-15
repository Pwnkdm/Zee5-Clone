import axios from "axios";

export const LOGIN_SUCESS = "Login/sucess";
export const LOGOUT = "Logout";
export const GET_DATA_HOME = "get/data/homepage";
export const GET_DATA_TV = "get/data/tv";
export const GET_DATA_MOVIES = "get/data/movies";

export const login = () => {
  return { type: LOGIN_SUCESS };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const getdatahome = () => (dispatch) => {
  axios.get("http://localhost:8080/homepage").then((r) => {
    dispatch({
      type: GET_DATA_HOME,
      payload: r.data,
    });
  });
};

export const getdatatv = (payload) => {
  return {
    type: GET_DATA_HOME,
    payload,
  };
};

export const getdatamovie = (payload) => {
  return {
    type: GET_DATA_HOME,
    payload,
  };
};
