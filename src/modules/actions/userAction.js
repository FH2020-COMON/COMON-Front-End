const { MODAL_STATE, CHANGE_TITLE, INTERVIEW_STATE, ACCESS_TOKEN } = require("./ActionTypes");

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
export function setToken(token){
    return{
        type: ACCESS_TOKEN,
        payload: token,
    }
}
export function TitleState(state) {
    return {
        type: CHANGE_TITLE,
        payload: state
    }
}