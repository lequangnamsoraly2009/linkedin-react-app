import {GET_COMMENTS} from "../actions/actionType";
export const initState = {
    comments: [],
};

const commentReducer = (state = initState,action) =>{
    switch(action.type){
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            };
        default:
            return state;
    }
};

export default commentReducer;