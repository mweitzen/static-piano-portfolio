import React from 'react'
import styled from 'styled-components'

import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

const SocialBox = styled.div`
  width: 140px;
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: .5rem;
`

const SocialLink = styled.a`
  color: #333333;
  font-size: 22px;
`

const SocialIcons = (props) => {
  return (
    <SocialBox>
      <SocialLink target="_blank" href="https://www.facebook.com/mweitzenhoffer/"><FontAwesomeIcon icon={["fab","facebook-f"]} inverse={props.dark ? true : false} /></SocialLink>
      <SocialLink target="_blank" href="https://www.instagram.com/mwkeys_nyc/?hl=en"><FontAwesomeIcon icon={["fab","instagram"]} inverse={props.dark ? true : false} /></SocialLink>
      <SocialLink target="_blank" href="https://www.youtube.com/channel/UClofO5-oJ7X3q3ukIMc2Rcw"><FontAwesomeIcon icon={["fab","youtube"]} inverse={props.dark ? true : false} /></SocialLink>
      <SocialLink target="_blank" href="https://soundcloud.com/mike-weitzenhoffer"><FontAwesomeIcon icon={["fab","soundcloud"]} inverse={props.dark ? true : false} /></SocialLink>
    </SocialBox>
  )
}

export default SocialIcons
