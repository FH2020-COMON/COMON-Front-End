const { MODAL_STATE, 
        INTERVIEW_STATE, 
        CHANGE_TITLE,
        CHANGE_ANIMATION_STATE } = require("./ActionTypes");

export function ModalState(state){
    return{
        type: MODAL_STATE,
        payload: state,
    }
}
export function InterviewState(state){
    return{
        type: INTERVIEW_STATE,
        payload: state,
    }
}

export function TitleState(state) {
    return {
        type: CHANGE_TITLE,
        payload: state
    }
}