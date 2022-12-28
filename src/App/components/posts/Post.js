import React from "react";
import PropTypes from 'prop-types'


// Props sao usadas apenas para leitura
export default function Post(props){
  return (
    <>
      <article>
        <strong>{props.post.title}</strong> <br />
        <small>{props.post.subtitle}</small> <br />
        Media: {props.likes / 2} <br />
        <br />
      </article>
    </>

  )
}

Post.propTypes = {
  likes: PropTypes.number.isRequired
}