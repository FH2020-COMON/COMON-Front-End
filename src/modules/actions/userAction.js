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
        const rooms = await axios({
            url: `${baseURL}/company/room/list`,
            method: "GET",
            headers: {
                "authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDcxNzEzMTQsInN1YiI6ImV1bmd5ZW9sZUBuYXZlci5jb20iLCJleHAiOjE2MDczMjEzMTQsInR5cGUiOiJhY2Nlc3NfdG9rZW4ifQ.oPjk0VxPnm2_karLBY-kPbGSUOr4PQwGCv7whY2qUK4`
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