import {applyMiddleware, combineReducers, compose, createStore} from "redux"

import profileReducer from "./reducers/profileReducer"
import dialogsReducer from "./reducers/dialogsReducer"
import sidebarReducer from "./reducers/sidebarReducer"
import usersReducer from "./reducers/usersReducer"
import auth from "./reducers/auth"
import app from "./reducers/app"
import security from "./reducers/security"
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
    auth,
    app,
    security,
    form: formReducer,
})

// Defining code for a 'react-redux' chrome extension
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
))

export default store

// Infer actions object to get types of actions
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

// export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type AppStateType = ReturnType<typeof rootReducer>
