/*
Sempre que se utiliza o JSX, implicitamente o React está sendo utilizado, sendo necessário sempre
realizar o import do React
*/

import React, { useState } from "react";
import Post from "./components/posts/Post";
import Header from "./components/Header/Header";


export default function App(){

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Titulo 1', subtitle: 'Subtitulo 1', likes: 10 },
    { id: Math.random(), title: 'Titulo 2', subtitle: 'Subtitulo 2', likes: 20 },
    { id: Math.random(), title: 'Titulo 3', subtitle: 'Subtitulo 3', likes: 48 }
  ])


  function handleRefresh(){
    posts.push()

    // adicionado uma funciona como argumento do setPosts(), para que o estado seja alterado mesmo com problemas
    // ocasiados por execucao assincrona (caso fique confuso, assistir aula: Trabalhando com States, minuto: 20 )
    // Essa alteracao e necessario, caso a alteracao atual dependa da anterior (prevState), caso contrario, nao ha
    // necessidade
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Titulo ${prevState.length + 1}`,
        subtitle: `Subtitulo ${prevState.length + 1}`,
        likes: 52
      }
    ])
  }


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
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Refresh</button>
        </h2>

      </Header>

      <hr />

      {posts.map(post => (
        /* Sempre for renderiar uma lista, como por exemplo utilizado map, cada um precisara de uma prop do proprio react,
         que é a key. Utilizada pelo react por baixo dos panos, pra fazer algo que nao faço ideia.
         Essa key precisa ser unica*/
        <Post
          key={post.id}
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