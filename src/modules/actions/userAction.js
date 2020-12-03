const { MODAL_STATE } = require("./ActionTypes");

export function ModalState(state){
    return{
        type: MODAL_STATE,
        payload: state,
    }
}