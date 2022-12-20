import {
  FILTER,
  GET_DATA_HOME,
  GET_DATA_MOVIES,
  GET_DATA_TV,
  GET_MOVIES,
  LOGIN_SUCESS,
  LOGOUT,
} from "./actions";

import Data from "../db.json";

// console.log(Data);

const token = localStorage.getItem("userinfo");
const initstate = {
  isAuth: token ? true : false,
  home: Data.homepage,
  tv: Data.tvshows,
  movies: Data.movies,
};

export const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case FILTER: {
      let data = state.home.filter((el) => {
        if (el.category === payload) {
          return el;
        }
      });
      // console.log(data);

      return { ...state, home: data };
    }
    case LOGIN_SUCESS: {
      return { ...state, login: true };
    }
    case LOGOUT: {
      localStorage.removeItem("userinfo");
      return {
        ...state,
        login: false,
        token: "",
      };
    }

    case GET_DATA_HOME: {
      return {
        ...state,
        // home: payload,
      };
    }

    case GET_MOVIES: {
      console.log(payload);
      return {
        ...state,
        // home: payload,
      };
    }

    case GET_DATA_TV: {
      return {
        ...state,
        // tv: payload,
      };
    }

    case GET_DATA_MOVIES: {
      return {
        ...state,
        // movies: payload,
      };
    }
    default: {
      return state;
    }
  }
};
