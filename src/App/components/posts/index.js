import React from "react";
import PropTypes from 'prop-types'
import PostHeader from "./postheader/PostHeader";
import { Container, Subtitle, Rating } from "./styles";


// Props sao usadas apenas para leitura
export default function Post(props){
  return (
    <>
      {/*
      A props passada num componente de estilo, como é o container, pode se chamar qualquer coisa.
      Assm, é possível utilizar o nome dessa prop em um condicional caso necessário
      */}
      <Container removed={props.post.removed}>
        <PostHeader
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            subtitle: props.post.subtitle,
            read: props.post.read
          }}
        />
        <br />
        <Subtitle>{props.post.subtitle}</Subtitle> <br />
        <Rating>Likes: {props.post.likes} <br /></Rating>
        <br />
      </Container>
    </>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  // utilizando shape() para tipar objetos
  post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      read: PropTypes.bool.isRequired,
      removed: PropTypes.bool.isRequired,
    }).isRequired
}