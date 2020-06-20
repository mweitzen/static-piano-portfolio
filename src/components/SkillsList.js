import React from 'react'
import styled from 'styled-components'

import {
  Grid
} from '@material-ui/core'

const List = styled.div`
  text-align: center;
`

const ListItem = styled.p`

`

const SkillsList = (props) => {
  const { header, list } = props;
  return (
    <Grid item xs={12} sm={6} >
      <List>
        <h3>{header}</h3>
        {
          list.map((item, i) => (
            <ListItem key={i}>{ item }</ListItem>
          ))
        }
      </List>
    </Grid>
  )
}

export default SkillsList
