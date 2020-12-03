import { MODAL_STATE } from "../actions/ActionTypes";
export default function(state={},action){
    switch(action.type){
        case MODAL_STATE:
            return {...state, modal_state: action.payload}
        default: 
            return state;
    }
}