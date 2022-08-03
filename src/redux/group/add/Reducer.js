import { ADD_GROUP_FAIL, ADD_GROUP_REQ, ADD_GROUP_SUC } from "./Types";

const init = {
    loading:false,
    data:[],
    error:''
}

const groupReducer = (state = init, action) => {
    switch (action.type) {
        case ADD_GROUP_REQ:
            return {
                ...state,
                loading:true,
            }

        case ADD_GROUP_SUC:
            return {
                ...state,
                data:action.payload
            }
            

        case ADD_GROUP_FAIL:
            return {
                ...state,
                error:action.payload
            }

        default:
            return state;
    }
}

export default groupReducer;