import React from 'react'
import { withSiteData } from 'react-static'

import { Link } from '@reach/router'

import MainBody from '../views/MainBody'

import HeroImg from '../assets/img/me1.jpg';
import HeroImage from '../components/HeroImage';
import HeroOverlay from '../components/HeroOverlay';

import CtaButton from '../components/CtaButton'

export default () => (
  <MainBody>
    <HeroImage src={HeroImg} />
    <HeroOverlay
      title={"Michael Weitzenhoffer"}
      text={"I am a professional keyboard player and pianist based in New York City. I am available for work in the studio or on stage. I am also available for solo gigs in restaurants and clubs. Check out some recordings of my playing and contact me to learn more!"}
    />
  <Link to="/listen">
    <CtaButton>Hear me play</CtaButton>
  </Link>
  </MainBody>
)
