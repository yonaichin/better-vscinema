import { combineReducers } from 'redux'
import view from './modules/view'
import theater from './modules/theater'

const App = combineReducers({
  view,
  theater
})

export default App
