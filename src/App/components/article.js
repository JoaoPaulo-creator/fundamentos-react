import React from "react";

const ArticleProps ={
  title: String,
  subtitle: String
}


// Props sao usadas apenas para leitura
export default function Article({title, subtitle} = ArticleProps){
  return (
    <>
      <h3>{title}</h3>
      <small>{subtitle}</small>
    </>
  )
}