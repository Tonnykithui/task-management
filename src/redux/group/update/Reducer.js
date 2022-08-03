import { UPDATE_GROUP_FAIL, UPDATE_GROUP_REQ, UPDATE_GROUP_SUC } from "./Types";

const init = {
    loading:false,
    data:[],
    error:''
}

const updateGroupReducer = (state = init, action) => {
    switch (action.type) {
        case UPDATE_GROUP_REQ:
            return {
                ...state,
                loading:true,
            }

        case UPDATE_GROUP_SUC:
            return {
                ...state,
                data:action.payload
            }
            

        case UPDATE_GROUP_FAIL:
            return {
                ...state,
                error:action.payload
            }

        default:
            return state;
    }
}

export default updateGroupReducer;