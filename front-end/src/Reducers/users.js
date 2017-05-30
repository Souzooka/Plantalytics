/*jshint esversion: 6*/
import {LOAD_USERS, GET_USER, ADD_USER, UPDATE_USER, DELETE_USER, LOGIN} from '../Actions';
const initialState = {
  users: [],
  singleUser: [],
  username: localStorage.username || null,
  loggedIn: localStorage.logged || false,
  id: localStorage.id || null,
};

const users = (state = initialState, action) => {
  switch(action.type){
    case LOAD_USERS:
      return Object.assign({}, state, {
        users: action.users
      });

    case GET_USER:
      return Object.assign({}, state, {
        singleUser: action.user
      });

    case ADD_USER:
      return Object.assign({}, state, {
        users: [action.user].concat(state.users)
      });

    case UPDATE_USER:
      return Object.assign({}, state, {
        users: action.users
      });

    case DELETE_USER:
      return Object.assign({}, state, {
        users: action.users
      });

    case LOGIN:
      return Object.assign({}, state, {
        loggedIn: true,
        username: localStorage.username,
        id: localStorage.id,
      });

    default:
      return state;
  }
};

export default users;