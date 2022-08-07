import { GET_TASK_ERR, GET_TASK_SUC, GET_TASK_REQ } from "./Types";
import axios from 'axios';

export const getTaskReq = data => {
    return {
        type:GET_TASK_REQ,
        payload:data
    }
}

export const getTaskSuc = success => {
    return {
        type:GET_TASK_SUC,
        payload:success
    }
} 

export const getTaskErr = error => {
    return {
        type:GET_TASK_ERR,
        payload:error
    }
}

export const getTaskThunk = () => {
    return (dispatch) => {
        dispatch(getTaskReq())
        axios.get('http://localhost:5000/task')
             .then(response => {
                const info = response.data;
                console.log(info);
                dispatch(getTaskSuc(info));
             })
             .catch(error => {
                const err = error.Message;
                dispatch(getTaskErr(err));
             })
    }
}