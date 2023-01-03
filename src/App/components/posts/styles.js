import styled, { css } from "styled-components";


export const Container = styled.article`
  margin-bottom: 24px;
  opacity: ${(props) => props.removed ? 0.5 : 1};
  color: ${(props) =>  props.removed ? '#f00' : '#fff'};

  /* Alternativa para usar, chamar a function css do styled components, para juntar o código repetitivo num lugar só */

  /* ${(props) => css`
    opacity: ${props.removed ? 0.5 : 1};
    color: ${props.removed ? '#f00' : '#fff'};
  `}; */
`

export const Subtitle = styled.small`
  display: block;
`

export const Rating = styled.span`
  color: #fff;
`