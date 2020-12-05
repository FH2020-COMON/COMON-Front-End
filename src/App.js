import React, { useEffect } from 'react'
import './App.css';

import { Main } from './containers'
import Modals from "./components/Public/Modals/Modals"

import { CrowdFunding, CrowdDetailPage, CompanyNotice, CompanyApplyPage, CompanyPage } from './components' 

import { GlobalStyle } from "./GlobalStyled"
import { BrowserRouter, Route } from 'react-router-dom'
import CompanyApply from './components/CompanyApply/CompanyApply';
import Mypage from './components/Mypage/Mypage';
import InterviewPage from './components/InterviewPage/InterviewPage';
import EmployeeList from './components/EmployeeList/EmployeeList';
import ApplyList from './components/ApplyList/ApplyList';
import ApplicantList from './components/ApplicantList/ApplicantList';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from './modules/actions/userAction';

function App() {
  const token=useSelector(state=>state.user.token);
  const dispatch=useDispatch();
  useEffect(()=>{
    if(localStorage.getItem("access_token") && !token){
      dispatch(setToken(localStorage.getItem("access_token")));
    }
  })
  return (
    <>
      <Modals></Modals>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/crowdfunding" component={CrowdFunding}></Route>
        <Route exact path="/mypage" component={Mypage} /> 
        <Route exact path="/crowddetail/:id" component={CrowdDetailPage} />
        <Route exact path="/companyapply/:id" component={CompanyApplyPage} />
        <Route exact path="/companynotice" component={CompanyNotice} />
        <Route exact path="/interview" component={InterviewPage}></Route>
        <Route exact path="/applylist" component={ApplyList}></Route>
        <Route exact path="/applicantlist" component={ApplicantList}></Route>
        <Route exact path="/apply" component={CompanyApply}></Route>
        <Route path="/company" component={CompanyPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
