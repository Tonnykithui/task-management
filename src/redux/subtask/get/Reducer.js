import { GET_SUBTASK_REQ, GET_SUBTASK_SUC, GET_SUBTASK_FAIL } from "./Types";

const init = {
    loading:false,
    data:[],
    error:''
}

const getSubTaskReducer = (state=init, action) => {
    switch (action.type) {
        case GET_SUBTASK_REQ:
            return {
                ...state,
                loading:true
            }
        
        case GET_SUBTASK_SUC:
            return {
                ...state,
                data:action.payload
            }

        case GET_SUBTASK_FAIL:
            return {
                ...state,
                error:action.payload
            }

        default:
            return state;
    }
}

export default getSubTaskReducer;