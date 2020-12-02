import React from 'react'
import './App.css';

import { Main } from './containers'
import Header from "./components/Public/Header/Header"
import { GlobalStyle } from "./GlobalStyled"
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/test" component={Header}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
