import {createStore} from 'redux'
import pReducer from './pReducer'

const myStore = createStore(pReducer)
export default myStore