import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
  width: 100%;
  max-width: 700px;
  position: relative;
  padding-top: 66.66%;
  border: 1px solid #666666;
  z-index: -2;
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
