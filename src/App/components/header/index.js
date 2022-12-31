import React, { useContext } from "react";
import PropTypes from 'prop-types'
import Button from "../button";
import { ThemeContext } from "../../context/ThemeContext";

import { Title } from './styles'


export default function Header(props) {

  const { onToggleTheme } = useContext(ThemeContext)
  return (
    <>
      <Title>{props.title}</Title>
      <h4>{props.subtitle}</h4>
      <Button onClick={onToggleTheme}>
        Mudar tema
      </Button>
      {props.children}
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
}

Header.defaulProps = {
  title: 'Blog do Ze' /* definindo um valor padrao, para quando title for undefined/null */
}