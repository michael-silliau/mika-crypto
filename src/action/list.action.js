// 1- CREER LE REDUCER
// 2- IMPORTER LE REDUCER DANS REDUCER/INDEX.JS
// 3- CREER DANS ACTION  /ACTION

export const SET_LIST_DISPLAY = "SET_LIST_DISPLAY";

export const setListDiSplay = (bool) => {
  return (dispatch) => {
    return dispatch({ type: SET_LIST_DISPLAY, payload: bool });
  };
};
