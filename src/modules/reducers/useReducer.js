import {INTERVIEW_STATE, 
        MODAL_STATE, 
        CHANGE_TITLE,
        GET_CHAT_ROOMS,
        ACCESS_TOKEN, 
        GET_CHAT_ROOMS_ERROR,
        GET_CHAT_ROOMS_SUCCESS,
        GET_CHAT_INFOR,
        GET_ROOMID,
        NEW_ROOM} from "../actions/ActionTypes";

const initalState = {
    room_list: {
        loading: false,
        data: null,
        error: null
    },
    chat: [

    ],
    rooms: [

    ],
} 

export default function(state=initalState ,action){
    switch(action.type){
        case MODAL_STATE:
            return {...state, modal_state: action.payload}
        case INTERVIEW_STATE:
            return {...state, interview_state: action.payload}
        case ACCESS_TOKEN:
            return {...state, token: action.payload}
        case CHANGE_TITLE:
            return {...state, title_state: action.payload}
        case GET_CHAT_ROOMS:
            return {
                ...state, 
                room_list: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_CHAT_ROOMS_SUCCESS:
            return {
                ...state,
                room_list: {
                    loading: false,
                    data: action.payload.data,
                    error: null
                }
            }
        case GET_CHAT_ROOMS_ERROR:
            return {
                ...state,
                room_list: {
                    loading: false,
                    data: null,
                    error: action.payload.data
                }
            }

        case GET_CHAT_INFOR:
            return {
                ...state,
                chat: [
                    ...state.chat,
                    action.payload
                ]
            }

        case GET_ROOMID:
            return {
                ...state,
                room_id: action.payload
            }

        case NEW_ROOM:
            return {
                ...state,
                rooms: [
                    ...state.rooms,
                    action.payload
                ]
            }
        default: 
            return state;
    }
}