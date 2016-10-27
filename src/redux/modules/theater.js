import { API_HOST } from '../../config'
import request from 'superagent'

// constants
const GET_THEATERS_REQUEST = 'GET_THEATERS_REQUEST'
const GET_THEATERS_SUCCESS = 'GET_THEATERS_SUCCESS'
const GET_THEATERS_FAIL = 'GET_THEATERS_FAIL'

// actions
export const getTheaters = () => {
  return (dispatch, getState) => {
    dispatch({
      type: GET_THEATERS_REQUEST,
      payload: {
        isFetching: true
      }
    })
    const url = `${API_HOST}/theater`
    request
      .get(url)
      .then(
        (res) => {
          dispatch({
            type: GET_THEATERS_SUCCESS,
            payload: {
              data: res.body,
              isFetching: false
            }
          })
        },
        (err) => {
          dispatch({
            type: GET_THEATERS_FAIL,
            payload: {
              hasError: true,
              isFetching: false,
              error: err.toString()
            }
          })
        }
      )
  }
}

export const actions = {
  getTheaters
}

// reducers
const initialState = {
  data: null,
  isFetching: false,
  hasError: false,
  error: null
}

const theater = (state = initialState, action) => {
  switch (action.type) {
    case GET_THEATERS_REQUEST:
      return Object.assign({}, state, action.payload)
    case GET_THEATERS_SUCCESS:
      return Object.assign({}, state, action.payload)
    case GET_THEATERS_FAIL:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default theater
