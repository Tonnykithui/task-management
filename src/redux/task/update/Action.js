import { UPDATE_TASK_REQ, UPDATE_TASK_SUC, UPDATE_TASK_ERR } from "./Types";
import axios from 'axios';
import { getTaskThunk } from "../get/Action";

export const updateTaskReq = task => {
    return {
        type:UPDATE_TASK_REQ,
        payload:task
    }
}

export const updateTaskSuc = success => {
    return {
        type:UPDATE_TASK_SUC,
        payload:success
    }
} 

export const updateTaskErr = error => {
    return {
        type:UPDATE_TASK_ERR,
        payload:error
    }
}

export const updateTaskThunk = (id,task) => {
    return (dispatch) => {
        dispatch(updateTaskReq())
        axios.put(`http://localhost:5000/task/${id}`, task)
             .then(response => {
                const data = response.data;
                dispatch(updateTaskSuc(data));
                dispatch(getTaskThunk())
             })
             .catch(error => {
                const err = error.Message;
                dispatch(updateTaskErr(err));
             })
    }
}