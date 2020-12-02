import React from 'react'
import './App.css';

import { Main } from './containers'
import Test from "./components/CrowdFunding/CrowdList"
import { GlobalStyle } from "./GlobalStyled"
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/test" component={Test}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
