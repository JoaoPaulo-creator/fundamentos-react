/*
Sempre que se utiliza o JSX, implicitamente o React está sendo utilizado, sendo necessário sempre
realizar o import do React
*/

import React, { useState, createContext } from "react";
import Post from "./components/posts/Post";
import Header from "./components/Header/Header";
import { ThemeProvider } from "./ThemeContext";


export default function App(){

  function randomLikes(){
    return Math.floor(Math.random() * 10)
  }



  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Titulo 1', subtitle: 'Subtitulo 1', likes: randomLikes(), read: false },
    { id: Math.random(), title: 'Titulo 2', subtitle: 'Subtitulo 2', likes: randomLikes(), read: true },
    { id: Math.random(), title: 'Titulo 3', subtitle: 'Subtitulo 3', likes: randomLikes(), read: true },
    { id: Math.random(), title: 'Titulo 4', subtitle: 'Subtitulo 4', likes: randomLikes(), read: false }
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
        likes: randomLikes()
      }
    ])
  }

  function handleRemovePost(postId){
    console.log({ postId })
    setPosts((prevState) => prevState.filter(post => post.id !== postId))
  }

  return (
    /*Para renderizar elementos adjacentes, necessario coloca-los dentro da tag fragment (<></>),
    sendo tambem possivel passar um elemento html para ser o parent/pai dos elementos filhos, como uma <div></div>, por exemplo.

    Esse conceito vem diretamente do HTML, nao sendo exclusivo do React
    */
    <ThemeProvider>

      <Header
        title='Le ninja blog'
        subtitle={'sasdas'}

      >
        <h2>
          Posts da semana
          <button
            onClick={handleRefresh}
            style={{
              margin: '8px',
            }}
          >Refresh</button>
        </h2>

      </Header>

      <hr />

      {posts.map(post => (
        /* Sempre for renderiar uma lista, como por exemplo utilizado map, cada um precisara de uma prop do proprio react,
         que é a key. Utilizada pelo react por baixo dos panos, pra fazer algo que nao faço ideia.
         Essa key precisa ser unica*/
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
        ))}
    </ThemeProvider>
  )
}