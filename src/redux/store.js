import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import showModalReducer from "./modal/Reducer";
import deleteGroupReducer from "./group/delete/Reducer";
import updateGroupReducer from "./group/update/Reducer";
import getGroupReducer from "./group/get/Reducer";
import groupReducer from "./group/add/Reducer";
import deleteSubTaskReducer from "./subtask/delete/Reducer";
import getSubTaskReducer from "./subtask/get/Reducer";
import updateSubTaskReducer from "./subtask/update/Reducer";
import postSubTaskReducer from "./subtask/post/Reducer";
import getTaskReducer from "./task/get/Reducer";
import postTaskReducer from "./task/post/Reducer";
import updateTaskReducer from "./task/update/Reducer";
import deleteTaskReducer from "./task/delete/Reducer";

export const allReducers = combineReducers({
    showModalReducer:showModalReducer,
    addGroup:groupReducer,
    deleteGroup:deleteGroupReducer,
    updateGroup:updateGroupReducer,
    getGroup:getGroupReducer,
    deleteSubtask:deleteSubTaskReducer,
    getSubtask:getSubTaskReducer,
    updateSubtask:updateSubTaskReducer,
    postSubtask:postSubTaskReducer,
    getTask:getTaskReducer,
    postTask:postTaskReducer,
    editTask:updateTaskReducer,
    deleteTask:deleteTaskReducer
})

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;