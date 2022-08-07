import { GET_TASK_ERR, GET_TASK_REQ, GET_TASK_SUC } from "./Types";

const init = {
    loading:false,
    data:[],
    error:''
}

const getTaskReducer = (state = init, action) => {
    switch (action.type) {
        case GET_TASK_REQ:
            return {
                ...state,
                loading:true
            }

        case GET_TASK_SUC:
            return {
                ...state,
                data:action.payload
            }

        case GET_TASK_ERR:
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default getTaskReducer;