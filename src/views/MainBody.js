import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MainBody = ({children}) => {
  return (
    <Body>
      {children}
    </Body>
  )
}

export default MainBody
