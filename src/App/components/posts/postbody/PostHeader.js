import React from "react"
import PropTypes from 'prop-types'
import Button from "../../button/Button"

export default function PostHeader(props) {
  return (
    <>
      <strong>{props.read ? <s>{props.post.title}</s> : props.post.title}</strong>
      <Button
        onClick={() => props.onRemove(props.post.id)}
      >
        Remover
      </Button>
    </>
  )
}

PostHeader.propTypes = {
  // utilizando shape() para tipar objetos
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      read: PropTypes.bool.isRequired,
    }).isRequired
}