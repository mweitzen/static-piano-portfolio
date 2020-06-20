import React from 'react'
import styled from 'styled-components'

import MainBody from '../views/MainBody'

import {
  Grid,
  Button,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core'

import {
  withStyles,
} from '@material-ui/core/styles'

import CtaButton from '../components/CtaButton'

const styles= {
  select: {
    width: '100%'
  },
  formControl: {
    width: '100%'
  },
}

const ContactForm = styled.div`
  width: 90%;
  transition: 0.5s ease-in;
  @media (min-width: 640px) {
    width: 600px;
  }
`

const Field = styled.p`
  display: none;
`

const ContactField = (props) => {
  const {label, helperText, placeholder} = props;

  return (
    <TextField
      fullWidth
      variant="outlined"
      color="default"
      label={label}
      placeholder={placeholder}
      helperText={helperText}
      {...props}
      />
  )
}

const Main = (props) => (
  <MainBody>
    <h1>Contact Me</h1>
  {/*  <p>There should be a CTA that lets someone "Request a booking"/"Book me" or "Schedule a call".</p> */}
    <ContactForm as={"form"} name="contact" action="/" netlify-honeypot="title" data-netlify="true" >
      <Field>
        <label>Hey: <input name="title" /></label>
      </Field>
      <input type="hidden" name="form-name" value="contact" />
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6} >
          <ContactField
            name="name"
            autoComplete="name"
            label="Full name"
            placeholder="Please enter your full name"
            {...props}
            />
        </Grid>
        <Grid item xs={12} sm={6} >
          <ContactField
            name="email"
            autoComplete="email"
            label="Email address"
            placeholder="Please enter your email address"
            {...props}
            />
        </Grid>
        <Grid item xs={12} >
          <ContactField
            name="message"
            label="Message"
            placeholder="Please enter your message"
            multiline
            rows={3}
            {...props}
            />
        </Grid>
        <Grid item xs={12}>
          <CtaButton>
            Send Message
          </CtaButton>
        </Grid>
      </Grid>
    </ContactForm>
    {/*
    <ContactForm as={"form"} name="phone-appointment" action="/success" data-netlify="true" >
      <input type="hidden" name="form-name" value="phone-appointment" />
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
          <FormControl className={props.classes.formControl}>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Select
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"monday"}>Monday</MenuItem>
              <MenuItem value={"tuesday"}>Tuesday</MenuItem>
              <MenuItem value={"wednesday"}>Wednesday</MenuItem>
              <MenuItem value={"thursday"}>Thursday</MenuItem>
              <MenuItem value={"friday"}>Friday</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={props.classes.formControl}>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Select
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"monday"}>Monday</MenuItem>
              <MenuItem value={"tuesday"}>Tuesday</MenuItem>
              <MenuItem value={"wednesday"}>Wednesday</MenuItem>
              <MenuItem value={"thursday"}>Thursday</MenuItem>
              <MenuItem value={"friday"}>Friday</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </ContactForm>
    */}
  </MainBody>
)

export default withStyles(styles)(Main)
