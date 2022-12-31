import React from "react";
import PropTypes from 'prop-types'
import PostHeader from "./postheader/PostHeader";
import styles from './post.scss'
import { Subtitle, Rating } from "./styles";


// Props sao usadas apenas para leitura
export default function Post(props){
  return (
    <>
      <article
        className={
          props.post.removed
          ? styles.postDeleted
          : styles.post
        }

      >
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
      </article>
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