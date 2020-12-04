import React from 'react'
import './App.css';

import { Main } from './containers'
import Modals from "./components/Public/Modals/Modals"

import { CrowdFunding, CrowdDetailPage, CompanyNotice, CompanyApplyPage, CompanyPage } from './components' 

import { GlobalStyle } from "./GlobalStyled"
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Modals></Modals>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/crowdfunding" component={CrowdFunding}></Route>
        <Route exact path="/crowddetail" component={CrowdDetailPage} />
        <Route exact path="/companyapply" component={CompanyApplyPage} />
        <Route exact path="/companynotice" component={CompanyNotice} />
        <Route path="/company" component={CompanyPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
