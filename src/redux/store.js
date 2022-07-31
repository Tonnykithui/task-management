import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import showModalReducer from "./modal/Reducer";
import groupReducer from "./group/Reducer";

export const allReducers = combineReducers({
    showModalReducer:showModalReducer,
    groupReducer:groupReducer
})

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;