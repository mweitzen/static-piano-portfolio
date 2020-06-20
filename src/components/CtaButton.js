import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Cta = styled.button`
  color: ${ props => props.dark ? "#ffffff" : "#333333" };
  background: ${ props => props.dark ? "#ffffff" : "#ffffff" };
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  height: 45px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid ${ props => props.dark ? "#ffffff" : "#333333" };
  transition: .175s ease-in;
  :hover {
    background: ${ props => props.dark ? "#ffffff" : "#333333" };
    color: white;
  }
`

const CtaButton = ({children}) => {
  return (
    <Cta>{children}</Cta>
  )
}

export default CtaButton
