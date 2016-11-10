import { combineReducers } from 'redux'
import view from './modules/view'
import theater from './modules/theater'
import auth from './modules/auth'

const App = combineReducers({
  view,
  theater,
  auth
})

export default App
