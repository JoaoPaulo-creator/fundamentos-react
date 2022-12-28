/*
Sempre que se utiliza o JSX, implicitamente o React está sendo utilizado, sendo necessário sempre
realizar o import do React
*/

import React from "react";
import Post from "./components/posts/Post";
import Header from "./components/Header/Header";

export default function App(){

  const posts = [
    { title: 'Titulo 1', subtitle: 'Subtitulo 1', likes: 10 },
    { title: 'Titulo 2', subtitle: 'Subtitulo 2', likes: 20 },
    { title: 'Titulo 3', subtitle: 'Subtitulo 3', likes: 48 }
  ]
  return (
    /*Para renderizar elementos adjacentes, necessario coloca-los dentro da tag fragment (<></>),
    sendo tambem possivel passar um elemento html para ser o parent/pai dos elementos filhos, como uma <div></div>, por exemplo.

    Esse conceito vem diretamente do HTML, nao sendo exclusivo do React
    */
    <>

      <Header

        title='Blog do aklsjdlaksjd'
        subtitle={'sasdas'}
      >
        <h2>Posts da semana</h2>

      </Header>

      <hr />

      {posts.map(post => (
        /* Sempre for renderiar uma lista, como por exemplo utilizado map, cada um precisara de uma prop do proprio react,
         que é a key. Utilizada pelo react por baixo dos panos, pra fazer algo que nao faço ideia */
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle
          }}
        />
        ))}
    </>
  )
}