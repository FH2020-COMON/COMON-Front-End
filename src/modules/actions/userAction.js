import Socket, {baseURL} from '../../socket'
import axios from 'axios'

const { MODAL_STATE, 
    CHANGE_TITLE, 
    INTERVIEW_STATE, 
    ACCESS_TOKEN,
    GET_CHAT_ROOMS,
    GET_CHAT_ROOMS_SUCCESS,
    GET_CHAT_ROOMS_ERROR,
    GET_ROOMID,
    GET_CHAT_INFOR,
    NEW_ROOM,
    GET_MY_INFOR,
    GET_MY_INFOR_SUCCESS,
    GET_MY_INFOR_ERROR,
    SET_CHATS
} = require("./ActionTypes");

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

export const getRooms = () => async dispatch => {
    dispatch({ type: GET_CHAT_ROOMS })
    try {
        const token = "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDcyMDQ3NzgsInN1YiI6InN5aUBzeWkiLCJleHAiOjE2MDczNTQ3NzgsInR5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.WgNLX8qz8IYkzjH80262D6Mk3wNqIxbUglCxvlBdfVY"
        const rooms = await axios({
            url: `${baseURL}/company/room/list`,
            method: "GET",
            headers: {
                "authorization": `Bearer ${token}`
            }
        })
        dispatch({type: GET_CHAT_ROOMS_SUCCESS, payload: rooms})
    } catch(e) {
        dispatch({type: GET_CHAT_ROOMS_ERROR, payload: e})
    }
}

export const getChatInfor = infor => {
    return {
        type: GET_CHAT_INFOR,
        payload: infor
    } 
}  

export const getRoomId = roomId => {
    return {
        type: GET_ROOMID,
        payload: roomId
    }
}

export const newRoom = roomInfor => {
    return {
        type: NEW_ROOM,
        payload: roomInfor
    }
}

export const myInfor = () => async dispatch => {
    dispatch({type: GET_MY_INFOR})
    try {
        const token = "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDcyMDQ3NzgsInN1YiI6InN5aUBzeWkiLCJleHAiOjE2MDczNTQ3NzgsInR5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.WgNLX8qz8IYkzjH80262D6Mk3wNqIxbUglCxvlBdfVY"
        const information = await axios({
            url: `${baseURL}:8000/user/myPage`,
            headers: {
                "authorization": `Bearer ${token}`
            } 
        })
        console.log(information)
        dispatch({type: GET_MY_INFOR_SUCCESS, payload: information})
    } catch(e) {
        dispatch({type: GET_MY_INFOR_ERROR, payload: e})
    }
}

export const setChats = (state) => {
    return {
        type: SET_CHATS,
        payload: state
    }
}