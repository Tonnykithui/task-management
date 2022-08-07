import { ADD_TASK_ERR, ADD_TASK_SUC, ADD_TASK_REQ } from "./Types";
import axios from 'axios';
import { getTaskThunk } from "../get/Action";
import { hideModal } from "../../modal";

export const addTaskReq = task => {
    return {
        type:ADD_TASK_REQ,
        payload:task
    }
}

export const addTaskSuc = success => {
    return {
        type:ADD_TASK_SUC,
        payload:success
    }
} 

export const addTaskErr = error => {
    return {
        type:ADD_TASK_ERR,
        payload:error
    }
}

export const addTaskThunk = task => {
    return (dispatch) => {
        dispatch(addTaskReq())
        axios.post('http://localhost:5000/task', task)
             .then(response => {
                const data = response.data;
                dispatch(addTaskSuc(data));
                dispatch(hideModal())
                dispatch(getTaskThunk())
             })
             .catch(error => {
                const err = error.Message;
                dispatch(addTaskErr(err));
             })
    }
}