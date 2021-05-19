import {GET_COMMENT} from "../actions/actionType";
export const initState = {
    comments: [],
};

const commentReducer = (state = initState,action) =>{
    switch(action.type){
        case GET_COMMENT:
            return {
                ...state,
                comments: action.payload,
            };
        default:
            return state;
    }
};

export default commentReducer;