import { useState } from "react";
import { useDispatch } from "react-redux";
import { ModalState } from "../../../modules/actions/userAction";
import * as S from "./styles"
function Invest(){
    const dispatch=useDispatch();
    const [value,setValue] = useState(0);
    function valueHandler(e){
        setValue(e.target.value);
    }
    function addMoney(amout){
        setValue(parseInt(value)+amout*10000);
    }
    return(
        <S.Modal_Wrapper>
            <S.Modal_Logo>
                <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/128874843_673210726703686_7370548855430177074_n.png?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_eui2=AeHDdeXJpq8hNjcQo35vxYzIlvOeP8EHvyOW854_wQe_I5NdcQCZD8bEnWXKQiXyDLHumZVTuE_QL9e5kNQIuDRZ&_nc_ohc=5BhpkbubYHQAX8QjWOw&_nc_ht=scontent-ssn1-1.xx&oh=3b4865bca90ef9609b007ec3ab807afc&oe=5FEF119C"></img>
            </S.Modal_Logo>
            <S.Invest_Form>
                <S.Money_State>
                    <span>&#8361;</span>
                    <input onChange={valueHandler} value={value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} type="text" readOnly></input>
                    <i onClick={()=>setValue(0)} className="fas fa-redo"></i>
                </S.Money_State>
                <S.Money_box>
                    <S.Add_money onClick={()=>addMoney(100)}>+ 100 만</S.Add_money>
                    <S.Add_money onClick={()=>addMoney(10)}>+ 10 만</S.Add_money>
                    <S.Add_money onClick={()=>addMoney(1)}>+ 1 만</S.Add_money>
                </S.Money_box>
                <h4>응원 메시지</h4>
                <S.Cheering_Message></S.Cheering_Message>
                <S.Invest_Submit>투자하기</S.Invest_Submit>
            </S.Invest_Form>
        </S.Modal_Wrapper>
    );
}
export default Invest;