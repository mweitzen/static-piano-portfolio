import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  width: 88%;
  background: #ffffff !important;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  z-index: 3;
  transition: .25s ease-in;

  h1 {
    width: 80%;
  }

  @media (min-width: 460px) {
    width: 420px;
    margin-top: -64px;
    h1 {
      width: initial;
    }
  }
`

const Text = styled.p`
  width: 80%;
  margin-top: 8px;
`

const HeroOverlay = ({title, text}) => (
      <Overlay>
        <h1>{title}</h1>
        <Text>{text}</Text>
      </Overlay>
  )

export default HeroOverlay
