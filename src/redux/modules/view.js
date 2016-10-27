// constants
const SET_VIEW = 'SET_VIEW';

// actions
export const setView = (view) => ({
  type: SET_VIEW,
  view
})

// reducers
const initialState = 'INDEX'

const view = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEW:
      return action.view
    default:
      return state
  }
}

export default view
