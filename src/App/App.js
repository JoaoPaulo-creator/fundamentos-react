/*
Sempre que se utiliza o JSX, implicitamente o React está sendo utilizado, sendo necessário sempre
realizar o import do React
*/

import React from "react";
import Article from "./components/article";


export default function App(){
  return (
    /*Para renderizar elementos adjacentes, necessario coloca-los dentro da tag fragment (<></>),
    sendo tambem possivel passar um elemento html para ser o parent/pai dos elementos filhos, como uma <div></div>, por exemplo.

    Esse conceito vem diretamente do HTML, nao sendo exclusivo do React
    */
    <>
      <h1>Meu blog</h1>
      <h2>Posts da semana</h2>

      <hr />

      <Article
        title='News Title 1'
        subtitle='News subtitile 1'
      />

      <Article
        title='News Title 2'
        subtitle='News subtitile 2'
      />

      <Article
        title='News Title 3'
        subtitle='News subtitile 3'
      />



    </>
  )
}