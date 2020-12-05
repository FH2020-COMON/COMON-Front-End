import { ACCESS_TOKEN, INTERVIEW_STATE, MODAL_STATE } from "../actions/ActionTypes";
import { INTERVIEW_STATE, 
         MODAL_STATE, 
         CHANGE_TITLE } from "../actions/ActionTypes";
export default function(state={},action){
    switch(action.type){
        case MODAL_STATE:
            return {...state, modal_state: action.payload}
        case INTERVIEW_STATE:
            return {...state, interview_state: action.payload}
        case ACCESS_TOKEN:
            return {...state, token: action.payload}
        case CHANGE_TITLE:
            return {...state, title_state: action.payload}
        default: 
            return state;
    }
}