import { UPDATE_TASK_ERR, UPDATE_TASK_REQ, UPDATE_TASK_SUC } from "./Types";

const init = {
    loading:false,
    data:[],
    error:''
}

const updateTaskReducer = (state = init, action) => {
    switch (action) {
        case UPDATE_TASK_REQ:
            return {
                ...state,
                loading:true
            }
            
        case UPDATE_TASK_SUC:
            return {
                ...state,
                data:action.payload
            }

        case UPDATE_TASK_ERR:
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default updateTaskReducer;