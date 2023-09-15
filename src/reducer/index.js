import { combineReducers } from "redux";
import stableReducer from "./stableReducer";
import listReducer from "./listReducer";

// 1- CREER LE REDUCER
// 2- IMPORTER LE REDUCER DANS REDUCER/INDEX.JS
// 3- CREER DANS ACTION  /ACTION

// index.js son role est de combiner tout les reducers abs
export default combineReducers({
  //// fichier reducer
  stableReducer,
  listReducer,
});
