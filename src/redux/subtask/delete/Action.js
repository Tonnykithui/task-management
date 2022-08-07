import { DELETE_SUBTASK_FAIL, DELETE_SUBTASK_REQ, DELETE_SUBTASK_SUC } from "./Types"
import axios from 'axios';

export const deleteSubtaskReq = data => {
    return {
        type:DELETE_SUBTASK_REQ,
        payload:data
    }
}

export const deleteSubTaskSuc = success => {
    return {
        type:DELETE_SUBTASK_SUC,
        payload:success
    }
}

export const deleteSubTaskFail = error => {
    return {
        type:DELETE_SUBTASK_FAIL,
        payload:error
    }
}

export const deleteSubTaskThunk = id => {
    return (dispatch) => {
        dispatch(deleteSubtaskReq())
        axios.delete(`http://localhost:5000/subtask/${id}`)
             .then(response => {
                const feed = response.data;
                dispatch(deleteSubTaskSuc(feed));
             })
             .catch(error => {
                const err = error.Message;
                dispatch(deleteSubTaskFail(err));
             })
    }
} 