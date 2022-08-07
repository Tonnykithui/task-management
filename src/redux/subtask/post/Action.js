import { ADD_SUBTASK_FAIL, ADD_SUBTASK_REQ, ADD_SUBTASK_SUC } from "./Types"
import axios from 'axios';
import { hideModal } from "../../modal/Action";
import { getSubTaskThunk } from "../get/Action";

export const addSubtaskReq = data => {
    return {
        type:ADD_SUBTASK_REQ,
        payload:data
    }
}

export const addSubTaskSuc = success => {
    return {
        type:ADD_SUBTASK_SUC,
        payload:success
    }
}

export const addSubTaskFail = error => {
    return {
        type:ADD_SUBTASK_FAIL,
        payload:error
    }
}

export const addSubTaskThunk = subtask => {
    return (dispatch) => {
        dispatch(addSubtaskReq())
        axios.post('http://localhost:5000/subtask', subtask)
             .then(response => {
                const feed = response.data;
                dispatch(addSubTaskSuc(feed))
                dispatch(getSubTaskThunk())
                dispatch(hideModal())
             })
             .catch(error => {
                const err = error.Message;
                dispatch(addSubTaskFail(err));
             })
    }
} 