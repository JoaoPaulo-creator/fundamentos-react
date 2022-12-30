import React from "react";
import ReactDOM  from "react-dom";
import App from './App/App'
import './index.css'

/*
Sempre que se utiliza o JSX, implicitamente o React está sendo utilizado, sendo necessário sempre
realizar o import do React
*/

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


