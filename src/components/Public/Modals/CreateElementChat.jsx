import React, { useState } from 'react'
import * as S from "./styles"
import { useDispatch } from 'react-redux'
import { ModalState, getRooms } from '../../../modules/actions/userAction'
import { baseURL } from '../../../socket'
import axios from 'axios'

function CreateElementChat(){
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const onSubmitCa = async (e) => {
        e.preventDefault()
        await axios({
            url: `${baseURL}/company/room/create`,
            method: "POST",
            headers: {
                "authorization": "Bearer " + localStorage.getItem("access_token")
            },
            data: {
                title: name
            }
        })
        dispatch(getRooms())
        dispatch(ModalState("none"))
    }

    const onChangeName = e => {
        setName(e.target.value)
    }

    return(
        <S.Modal_Wrapper>
            <S.Modal_Logo>
                <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/128874843_673210726703686_7370548855430177074_n.png?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_eui2=AeHDdeXJpq8hNjcQo35vxYzIlvOeP8EHvyOW854_wQe_I5NdcQCZD8bEnWXKQiXyDLHumZVTuE_QL9e5kNQIuDRZ&_nc_ohc=5BhpkbubYHQAX8QjWOw&_nc_ht=scontent-ssn1-1.xx&oh=3b4865bca90ef9609b007ec3ab807afc&oe=5FEF119C"></img>
            </S.Modal_Logo>
            <S.Login_Form onSubmit={onSubmitCa}>
                <h4>요소명</h4>
                <input value={name} onChange={onChangeName} placeholder="요소명을 입력해주세요" type="text"/>
                <button>요소 생성하기</button>
            </S.Login_Form>
        </S.Modal_Wrapper>
    );
}
export default CreateElementChat;