import { GET_GROUP_FAIL, GET_GROUP_REQ, GET_GROUP_SUC } from "./Types";

const init = {
    loading:false,
    data:[],
    error:''
}

const getGroupReducer = (state = init, action) => {
    switch (action.type) {
        case GET_GROUP_REQ:
            return {
                ...state,
                loading:true,
            }

        case GET_GROUP_SUC:
            return {
                ...state,
                data:action.payload
            }
            
        case GET_GROUP_FAIL:
            return {
                ...state,
                error:action.payload
            }

        default:
            return state;
    }
}

export default getGroupReducer;