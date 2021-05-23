import {GET_COMMENTS,EDIT_COMMENT} from "../actions/actionType";
export const initState = {
    comments: [],
};

const commentReducer = (state = initState,action) =>{
    switch(action.type){
        case GET_COMMENTS:
            return {
                comments: action.payload,
            };
        case EDIT_COMMENT:
            return{
                comment: action.payload,
            }
        default:
            return state;
    }
};

export default commentReducer;