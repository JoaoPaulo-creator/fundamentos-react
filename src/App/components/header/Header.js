import React from "react";
import PropTypes from 'prop-types'

export default function Header(props) {

  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

Header.defaulProps = {
  title: 'Blog do Ze' /* definindo um valor padrao, para quando title for undefined/null */
}