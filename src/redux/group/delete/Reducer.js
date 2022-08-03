import { DELETE_GROUP_FAIL, DELETE_GROUP_REQ, DELETE_GROUP_SUC } from "./Types";

const init = {
    loading:false,
    data:[],
    error:''
}

const deleteGroupReducer = (state = init, action) => {
    switch (action.type) {
        case DELETE_GROUP_REQ:
            return {
                ...state,
                loading:true,
            }

        case DELETE_GROUP_SUC:
            return {
                ...state,
                data:action.payload
            }
            

        case DELETE_GROUP_FAIL:
            return {
                ...state,
                error:action.payload
            }

        default:
            return state;
    }
}

export default deleteGroupReducer;