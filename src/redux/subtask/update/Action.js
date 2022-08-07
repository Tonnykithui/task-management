import { UPDATE_SUBTASK_FAIL, UPDATE_SUBTASK_REQ, UPDATE_SUBTASK_SUC } from "./Types"
import axios from 'axios';

export const updateSubtaskReq = data => {
    return {
        type:UPDATE_SUBTASK_REQ,
        payload:data
    }
}

export const updateSubTaskSuc = success => {
    return {
        type:UPDATE_SUBTASK_SUC,
        payload:success
    }
}

export const updateSubTaskFail = error => {
    return {
        type:UPDATE_SUBTASK_FAIL,
        payload:error
    }
}

export const updateSubTaskThunk = subtask => {
    return (dispatch) => {
        dispatch(updateSubtaskReq())
        axios.post(`http://localhost:5000/subtask/${subtask.id}`, subtask)
             .then(response => {
                const feed = response.data;
                dispatch(updateSubTaskSuc(feed));
             })
             .catch(error => {
                const err = error.Message;
                dispatch(updateSubTaskFail(err));
             })
    }
} 