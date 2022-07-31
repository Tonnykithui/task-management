import { ADD_GROUP_FAIL, ADD_GROUP_REQ, ADD_GROUP_SUC } from "./Types"
import axios from 'axios';

export const addGroupReq = group => {
    return {
        type:ADD_GROUP_REQ,
        payload:group
    }
}

export const addGroupSuc = success => {
    return {
        type:ADD_GROUP_SUC,
        payload:success
    }
}

export const addGroupFail = error => {
    return {
        type:ADD_GROUP_FAIL,
        payload:error
    }
}

export const addGroupThunk = group => {
    return (dispatch) => {
        dispatch(addGroupReq());
        axios.post('http://localhost:5000/group', group)
             .then(response  => {
                const feed = response.data;
                dispatch(addGroupSuc(feed));
             })
             .catch(error => {
                const err = error.Message;
                dispatch(addGroupFail(err))
             })
    }
}