import { GET_GROUP_FAIL, GET_GROUP_REQ, GET_GROUP_SUC } from "./Types"
import axios from 'axios';

export const getGroupReq = () => {
    return {
        type:GET_GROUP_REQ
    }
}

export const getGroupSuc = success => {
    return {
        type:GET_GROUP_SUC,
        payload:success
    }
}

export const getGroupFail = error => {
    return {
        type:GET_GROUP_FAIL,
        payload:error
    }
}

export const getGroupThunk = group => {
    return (dispatch) => {
        dispatch(getGroupReq());
        axios.get('http://localhost:5000/group')
             .then(response  => {
                const feed = response.data;
                dispatch(getGroupSuc(feed));
             })
             .catch(error => {
                const err = error.Message;
                dispatch(getGroupFail(err))
             })
    }
}