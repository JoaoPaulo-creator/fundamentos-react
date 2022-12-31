import React from "react"
import PropTypes from 'prop-types'
import Button from "../../button"
import { Title } from './styles'



export default function PostHeader(props) {
  return (
    <>
      <Title>{props.read ? <s>{props.post.title}</s> : props.post.title}</Title>
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