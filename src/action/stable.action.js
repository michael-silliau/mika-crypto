// 1- CREER LE REDUCER
// 2- IMPORTER LE REDUCER DANS REDUCER/INDEX.JS
// 3- CREER DANS ACTION  /ACTION

export const SET_STABLE_STATE = "SET_STABLE_STATE";

export const setStableState = (bool) => {
  return (dispatch) => {
    return dispatch({ type: SET_STABLE_STATE, payload: bool });
  };
};
