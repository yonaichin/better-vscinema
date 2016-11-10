// constants
const SET_AUTH = 'SET_AUTH';

// actions
export const setAuth = (payload) => {
  return (dispatch, getState) => {
    if (payload.status === 'unknown') {
      dispatch({
        type: SET_AUTH,
        payload: {}
      })
    } else {
      dispatch({
        type: SET_AUTH,
        payload
      })
    }
  }
}
// reducers
const initialState = {}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default auth

