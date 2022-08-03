import { UPDATE_GROUP_FAIL, UPDATE_GROUP_REQ, UPDATE_GROUP_SUC } from "./Types"
import axios from 'axios';

export const updateGroupReq = group => {
    return {
        type:UPDATE_GROUP_REQ,
        payload:group
    }
}

export const updateGroupSuc = success => {
    return {
        type:UPDATE_GROUP_SUC,
        payload:success
    }
}

export const updateGroupFail = error => {
    return {
        type:UPDATE_GROUP_FAIL,
        payload:error
    }
}

export const updateGroupThunk = group => {
    return (dispatch) => {
        dispatch(updateGroupReq());
        axios.put(`http://localhost:5000/group/${group.id}`, group)
             .then(response  => {
                const feed = response.data;
                dispatch(updateGroupSuc(feed));
             })
             .catch(error => {
                const err = error.Message;
                dispatch(updateGroupFail(err))
             })
    }
}