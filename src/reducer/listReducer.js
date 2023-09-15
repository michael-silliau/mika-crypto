import { SET_LIST_DISPLAY } from "../action/list.action";

const initialeState = { showList: false };

// 1- CREER LE REDUCER
// 2- IMPORTER LE REDUCER DANS REDUCER/INDEX.JS
// 3- CREER DANS ACTION  /ACTION
export default function listReducer(state = initialeState, action) {
  switch (action.type) {
    case SET_LIST_DISPLAY:
      return { showList: action.payload };
    default:
      return state;
  }
}
