import React from "react";
import PropTypes from 'prop-types'


// Props sao usadas apenas para leitura
export default function Post(props){
  return (
    <>
      <article>
        <strong>{props.post.read ? <s>{props.post.title}</s> : props.post.title}</strong>
        <button onClick={() => props.onRemove(props.post.id)}>Remove</button>
        <br />
        <small>{props.post.subtitle}</small> <br />
        Likes: {props.post.likes} <br />
        <br />
      </article>
    </>

  )
}

Post.propTypes = {
  // utilizando shape() para tipar objetos
  post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      onRemove: PropTypes.func.isRequired,
      read: PropTypes.bool.isRequired,
    }).isRequired
}