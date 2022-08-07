import { DELETE_GROUP_FAIL, DELETE_GROUP_REQ, DELETE_GROUP_SUC } from "./Types"
import axios from 'axios';
import { getGroupThunk } from "../get/Action";

export const deleteGroupReq = id => {
    return {
        type:DELETE_GROUP_REQ,
        payload:id
    }
}

export const deleteGroupSuc = success => {
    return {
        type:DELETE_GROUP_SUC,
        payload:success
    }
}

export const deleteGroupFail = error => {
    return {
        type:DELETE_GROUP_FAIL,
        payload:error
    }
}

export const deleteGroupThunk = id => {
    return (dispatch) => {
        dispatch(deleteGroupReq());
        axios.delete(`http://localhost:5000/group/${id}`)
             .then(response  => {
                const feed = response.data;
                dispatch(deleteGroupSuc(feed));
                dispatch(getGroupThunk())
             })
             .catch(error => {
                const err = error.Message;
                dispatch(deleteGroupFail(err))
             })
    }
}