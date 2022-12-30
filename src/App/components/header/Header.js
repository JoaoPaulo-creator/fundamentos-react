import React, { useContext } from "react";
import PropTypes from 'prop-types'
import Button from "../button/Button";
import { ThemeContext } from "../../ThemeContext";

import styles from './Header.scss' // dando um nome, devido ao uso do css modules

export default function Header(props) {

  const { onToggleTheme } = useContext(ThemeContext)
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
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