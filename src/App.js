import React from 'react'
import './App.css';

import { Main } from './containers'
import CrowdFunding from "./components/CrowdFunding/CrowdFunding"
import Modals from "./components/Public/Modals/Modals"
import CrowdDetailPage from './components/CrowdDetailPage/CrowdDetailPage'
import CompanyApplyPage from './components/CompanyApplyPage/CompanyApplyPage'

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
        <Route exact path="/asd" component={CrowdDetailPage} />
        <Route exact path="/qwer" component={CompanyApplyPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
