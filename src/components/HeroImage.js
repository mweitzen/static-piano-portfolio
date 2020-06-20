import React from 'react'
import styled from 'styled-components'

const HeroImg = styled.img`
  width: 100%;
  max-width: 700px;
  min-height: 63vw;
  border: 1px solid #666666;
  z-index: -1;
`

const HeroImage = (props) => {
  return (
    <HeroImg {...props} />
  )
}

export default HeroImage
