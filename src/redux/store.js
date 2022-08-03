import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import showModalReducer from "./modal/Reducer";
import deleteGroupReducer from "./group/delete/Reducer";
import updateGroupReducer from "./group/update/Reducer";
import getGroupReducer from "./group/get/Reducer";
import groupReducer from "./group/add/Reducer";

export const allReducers = combineReducers({
    showModalReducer:showModalReducer,
    addGroup:groupReducer,
    deleteGroup:deleteGroupReducer,
    updateGroup:updateGroupReducer,
    getGroup:getGroupReducer
})

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;