import { ADD_TASK_ERR, ADD_TASK_REQ, ADD_TASK_SUC } from "./Types";

const init = {
    loading:true,
    data:[],
    error:''
}

const postTaskReducer = (state = init, action) => {
    switch (action) {
        case ADD_TASK_REQ:
            return {
                ...state,
                loading:true
            }

        case ADD_TASK_SUC:
            return {
                ...state,
                data:action.payload
            }

        case ADD_TASK_ERR:
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default postTaskReducer;