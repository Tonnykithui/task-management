import { DELETE_TASK_ERR, DELETE_TASK_SUC, DELETE_TASK_REQ } from "./Types";
import axios from 'axios';

export const deleteTaskReq = task => {
    return {
        type:DELETE_TASK_REQ,
        payload:task
    }
}

export const deleteTaskSuc = success => {
    return {
        type:DELETE_TASK_SUC,
        payload:success
    }
} 

export const deleteTaskErr = error => {
    return {
        type:DELETE_TASK_ERR,
        payload:error
    }
}

export const deleteTaskThunk = taskId => {
    return (dispatch) => {
        dispatch(deleteTaskReq())
        axios.delete(`http://localhost:5000/task/${taskId}`)
             .then(response => {
                const data = response.data;
                dispatch(deleteTaskSuc(data));
             })
             .catch(error => {
                const err = error.Message;
                dispatch(deleteTaskErr(err));
             })
    }
}