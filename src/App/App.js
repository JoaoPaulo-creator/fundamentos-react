/*
Sempre que se utiliza o JSX, implicitamente o React está sendo utilizado, sendo necessário sempre
realizar o import do React
*/

import React from "react";
import Post from "./components/posts/Post";
import Header from "./components/Header/Header";

export default function App(){
  return (
    /*Para renderizar elementos adjacentes, necessario coloca-los dentro da tag fragment (<></>),
    sendo tambem possivel passar um elemento html para ser o parent/pai dos elementos filhos, como uma <div></div>, por exemplo.

    Esse conceito vem diretamente do HTML, nao sendo exclusivo do React
    */
    <>

      <Header
        title='Blog do ze'
        subtitle={'sasdas'}
      >
        <h2>Posts da semana</h2>

      </Header>

      <hr />

      <Post
        title='News Title 1'
        subtitle='News subtitile 1'
      />

      <Post
        title='News Title 2'
        subtitle='News subtitile 2'
      />

      <Post
        title='News Title 3'
        subtitle='News subtitile 3'
      />



    </>
  )
}