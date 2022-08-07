import { GET_SUBTASK_FAIL, GET_SUBTASK_REQ, GET_SUBTASK_SUC } from "./Types"
import axios from 'axios';

export const getSubtaskReq = data => {
    return {
        type:GET_SUBTASK_REQ,
        payload:data
    }
}

export const getSubTaskSuc = success => {
    return {
        type:GET_SUBTASK_SUC,
        payload:success
    }
}

export const getSubTaskFail = error => {
    return {
        type:GET_SUBTASK_FAIL,
        payload:error
    }
}

export const getSubTaskThunk = () => {
    return (dispatch) => {
        dispatch(getSubtaskReq())
        axios.get('http://localhost:5000/subtask')
             .then(response => {
                const feed = response.data;
                dispatch(getSubTaskSuc(feed));
             })
             .catch(error => {
                const err = error.Message;
                dispatch(getSubTaskFail(err));
             })
    }
} 