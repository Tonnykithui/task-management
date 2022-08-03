import { ADD_SUBTASK_REQ, ADD_SUBTASK_SUC, ADD_SUBTASK_FAIL } from "./Types";

const init = {
    loading:false,
    data:[],
    error:''
}

const subTaskReducer = (state=init, action) => {
    switch (action.type) {
        case ADD_SUBTASK_REQ:
            return {
                ...state,
                loading:true
            }
        
        case ADD_SUBTASK_SUC:
            return {
                ...state,
                data:action.payload
            }

        case ADD_SUBTASK_FAIL:
            return {
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
}

export default subTaskReducer;