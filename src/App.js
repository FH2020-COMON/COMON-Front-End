import React from 'react'
import './App.css';

import { Main } from './containers'
import CrowdFunding from "./components/CrowdFunding/CrowdFunding"
import { GlobalStyle } from "./GlobalStyled"
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/crowdfunding" component={CrowdFunding}></Route>

      </BrowserRouter>
    </>
  );
}

export default App;
