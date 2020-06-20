import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
  width: 100%;
  max-width: 700px;
  position: relative;
  padding-top: 66.66%;
  border: 1px solid #666666;
  max-height: calc(700px * .6666);
  z-index: -2;
  overflow: hidden;
  @media (min-width: 733px) {
    padding-top: calc(700px * (2/3))
  }
`

const HeroImg = styled.img`
  width: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
`

const HeroImage = (props) => {
  return (
    <HeroContainer>
      <HeroImg {...props} />
    </HeroContainer>
  )
}

export default HeroImage
