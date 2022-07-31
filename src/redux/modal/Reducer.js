import { HIDE_GROUP_MODAL, HIDE_MODAL, HIDE_SUBTASK_MODAL, HIDE_TASK_MODAL, SHOW_GROUP_MODAL, SHOW_SUBTASK_MODAL, SHOW_TASK_MODAL } from "./Types";

export const init = {
    show:false,
    value:0
}

const showModalReducer = (state = init, action) => {
    switch (action.type) {
        case SHOW_TASK_MODAL:
            return {
                ...state,
                show:true,
                value:action.payload
            }

        case HIDE_TASK_MODAL:
            return {
                ...state,
                show:false
            }

        case SHOW_SUBTASK_MODAL:
            return {
                ...state,
                show:true,
                value:action.payload
            }

        case HIDE_SUBTASK_MODAL:
            return {
                ...state,
                show:false
            }

        case SHOW_GROUP_MODAL:
            return {
                ...state,
                show:true,
                value:action.payload
            }

        case HIDE_GROUP_MODAL:
            return {
                ...state,
                show:false
            }

        case HIDE_MODAL:
            return {
                ...state,
                show:false
            }
    
        default:
            return state;
    }
}

export default showModalReducer;