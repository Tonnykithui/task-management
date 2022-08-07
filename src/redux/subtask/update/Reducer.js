import { UPDATE_SUBTASK_REQ, UPDATE_SUBTASK_SUC, UPDATE_SUBTASK_FAIL } from "./Types";

const init = {
    loading:false,
    data:[],
    error:''
}

const updateSubTaskReducer = (state=init, action) => {
    switch (action.type) {
        case UPDATE_SUBTASK_REQ:
            return {
                ...state,
                loading:true
            }
        
        case UPDATE_SUBTASK_SUC:
            return {
                ...state,
                data:action.payload
            }

        case UPDATE_SUBTASK_FAIL:
            return {
                ...state,
                error:action.payload
            }

        default:
            return state;
    }
}

export default updateSubTaskReducer;