import { DELETE_SUBTASK_REQ, DELETE_SUBTASK_SUC, DELETE_SUBTASK_FAIL } from "./Types";

const init = {
    loading:false,
    data:[],
    error:''
}

const deleteSubTaskReducer = (state=init, action) => {
    switch (action.type) {
        case DELETE_SUBTASK_REQ:
            return {
                ...state,
                loading:true
            }
        
        case DELETE_SUBTASK_SUC:
            return {
                ...state,
                data:action.payload
            }

        case DELETE_SUBTASK_FAIL:
            return {
                ...state,
                error:action.payload
            }

        default:
            return state;
    }
}

export default deleteSubTaskReducer;