import React from "react";
import ReactDOM  from "react-dom";
import App from './App/App'
import GlobalStyle from './styles/global'

/*
Sempre que se utiliza o JSX, implicitamente o React está sendo utilizado, sendo necessário sempre
realizar o import do React
*/

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
    </>,
  document.getElementById('root')
)


