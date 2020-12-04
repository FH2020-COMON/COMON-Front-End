import React from 'react'
import './App.css';

import { Main } from './containers'
import Modals from "./components/Public/Modals/Modals"

import { CrowdFunding, CrowdDetailPage, CompanyNotice, CompanyApplyPage, CompanyPage } from './components' 

import { GlobalStyle } from "./GlobalStyled"
import { BrowserRouter, Route } from 'react-router-dom'
import CompanyApply from './components/CompanyApply/CompanyApply';
import Mypage from './components/Mypage/Mypage';
import InterviewPage from './components/InterviewPage/InterviewPage';

function App() {
  return (
    <>
      <Modals></Modals>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/crowdfunding" component={CrowdFunding}></Route>
        <Route exact path="/mypage" component={Mypage} /> 
        <Route exact path="/crowddetail" component={CrowdDetailPage} />
        <Route exact path="/companyapply" component={CompanyApplyPage} />
        <Route exact path="/companynotice" component={CompanyNotice} />
        <Route exact path="/interview" component={InterviewPage}></Route>
        <Route exact path="/test" component={CompanyApply}></Route>
        <Route path="/company" component={CompanyPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
