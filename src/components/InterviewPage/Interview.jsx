import { useDispatch } from 'react-redux';
import { InterviewState } from '../../modules/actions/userAction';
import * as S from './styles'
function Interview(){
    const dispatch=useDispatch();
    return(
        <>
            
            <S.NextButton onClick={()=>dispatch(InterviewState(2))}>다음</S.NextButton>
        </>
    )
}
export default Interview;