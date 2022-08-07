import { DELETE_TASK_ERR, DELETE_TASK_REQ, DELETE_TASK_SUC } from "./Types";

const init = {
    loading:false,
    data:[],
    error:''
}

const deleteTaskReducer = (state = init, action) => {
    switch (action) {
        case DELETE_TASK_REQ:
            return {
                ...state,
                loading:true
            }

        case DELETE_TASK_SUC:
            return {
                ...state,
                data:action.payload
            }

        case DELETE_TASK_ERR:
            return {
                ...state,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default deleteTaskReducer;