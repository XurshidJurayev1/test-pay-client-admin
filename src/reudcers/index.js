import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { clickSideBarReducer } from './AdminReducer'



const rootReducer = combineReducers({
    sideBar: clickSideBarReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))