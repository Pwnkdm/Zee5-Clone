import {
  GET_DATA_HOME,
  GET_DATA_MOVIES,
  GET_DATA_TV,
  LOGIN_SUCESS,
  LOGOUT,
} from "./actions";

const token = localStorage.getItem("userinfo");
const initstate = {
  isAuth: token ? true : false,
  home: [],
  tv: [],
  movies: [],
};

export const reducer = (state = initstate, { type, payload }) => {
  console.log(state);
  switch (type) {
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
        home: payload,
      };
    }

    case GET_DATA_TV: {
      return {
        ...state,
        tv: payload,
      };
    }

    case GET_DATA_MOVIES: {
      return {
        ...state,
        movies: payload,
      };
    }
    default: {
      return state;
    }
  }
};
