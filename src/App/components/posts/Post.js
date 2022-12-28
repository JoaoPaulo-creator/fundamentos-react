import React from "react";
import PropTypes from 'prop-types'


// Props sao usadas apenas para leitura
export default function Post(props){
  return (
    <>
      <article>
        <strong>{props.title}</strong> <br />
        <small>{props.subtitle}</small> <br />
        Media: {props.likes} <br />
        <br />
      </article>
    </>

  )
}

Post.propTypes = {
  likes: PropTypes.number.isRequired
}