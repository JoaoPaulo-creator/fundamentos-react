/*
Sempre que se utiliza o JSX, implicitamente o React está sendo utilizado, sendo necessário sempre
realizar o import do React
*/

import React, { useState, createContext } from "react";
import Post from "./components/posts";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import { SubtitleStyle } from "./styles";


export default function App(){

  function randomLikes(){
    return Math.floor(Math.random() * 10)
  }


  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Titulo 1', subtitle: 'Subtitulo 1', likes: randomLikes(), read: false, removed: false },
    { id: Math.random(), title: 'Titulo 2', subtitle: 'Subtitulo 2', likes: randomLikes(), read: true , removed: false },
    { id: Math.random(), title: 'Titulo 3', subtitle: 'Subtitulo 3', likes: randomLikes(), read: true , removed: false },
    { id: Math.random(), title: 'Titulo 4', subtitle: 'Subtitulo 4', likes: randomLikes(), read: false, removed: false }
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
    setPosts((prevState) => prevState.map(
      post => post.id === postId ? { ...post, removed: true } : post
    ))
  }

  return (
    /*Para renderizar elementos adjacentes, necessario coloca-los dentro da tag fragment (<></>),
    sendo tambem possivel passar um elemento html para ser o parent/pai dos elementos filhos, como uma <div></div>, por exemplo.

    Esse conceito vem diretamente do HTML, nao sendo exclusivo do React
    */
    <ThemeProvider>

      <Header
        title='Le ninja blog'
        subtitle={'Blog de humor KEKW'}
      >
        <SubtitleStyle>
          Posts da semana
          <button
            onClick={handleRefresh}
            style={{marginLeft: '8px'}}
          >
            Refresh
          </button>
        </SubtitleStyle>

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