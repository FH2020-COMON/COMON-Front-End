import {INTERVIEW_STATE, 
        MODAL_STATE, 
        CHANGE_TITLE,
        GET_CHAT_ROOMS,
        ACCESS_TOKEN, 
        GET_CHAT_ROOMS_ERROR,
        GET_CHAT_ROOMS_SUCCESS,
        GET_CHAT_INFOR,
        GET_ROOMID,
        NEW_ROOM,
        GET_MY_INFOR,
        GET_MY_INFOR_SUCCESS,
        GET_MY_INFOR_ERROR,
        SET_CHATS} from "../actions/ActionTypes";

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
    my_infor: {
        loading: false,
        data: null,
        error: null
    }
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
            console.log(action.payload)
            return {
                ...state,
                chats: [
                    ...state.chats,
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
                room_list: {
                    ...state.room_list,
                    data: [
                        ...state.room_list.data,
                        action.payload
                    ]
                }
            }

        case GET_MY_INFOR:
            return {
                ...state,
                my_infor: {
                    loading: true,
                    data: null,
                    error: null
                }
            }

        case GET_MY_INFOR_SUCCESS:
            return {
                ...state,
                my_infor: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }

        case GET_MY_INFOR_ERROR:
            return {
                ...state,
                my_infor: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }

        case SET_CHATS:
            return {
                ...state,
                chats: [
                    ...action.payload
                ]
            }
        default: 
            return state;
    }
}