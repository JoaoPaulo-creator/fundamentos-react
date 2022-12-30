import React, { useContext } from "react";
import PropTypes from 'prop-types'
import Button from "../button/Button";
import { ThemeContext } from "../../ThemeContext";

export default function Header(props) {

  const { onToggleTheme } = useContext(ThemeContext)
  return (

    <>
      <div
        style={{
          background: '#ccc',
          fontFamily: 'sans-serif'
        }}
      >

      </div>
      <h1>{props.title}</h1>
      <Button onClick={onToggleTheme}>
        Mudar tema
      </Button>
      {props.children}
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Header.defaulProps = {
  title: 'Blog do Ze' /* definindo um valor padrao, para quando title for undefined/null */
}