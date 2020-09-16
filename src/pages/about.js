import React from 'react'
import styled from  'styled-components'

import {
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'

import MainBody from '../views/MainBody'

import SkillsList from '../components/SkillsList';
import HeroOverlay from '../components/HeroOverlay';
import HeroImage from '../components/HeroImage';
import HeroImg from '../assets/img/me6.jpg';

const inStudio = [
  "Strong and creative improvisation",
  "Proficient sight reading",
  "Technical and consistent playing",
  "Adaptable stylistic approaches",
];
const onStage = [
  "Great presence and energy",
  "Supportive player",
  "Adaptive to setting",
  "Reliable and consistent",
];
const keyboards = [
  "Korg SV-1",
  "Roland V-Combo VR-09",
  "Korg MicroKorg S",
  "Novation Impulse 61-Key MIDI",
];
const guitars = [
  `Breedlove Stage Dreadnought`,
  "Fender Standard Stratocaster",
];

const SkillSet = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  transition: 0.5s ease-in;
  @media (min-width: 600px) {
    flex-direction: row;
    width: 600px;
  }
`

export default () => (
  <MainBody>
    <HeroImage src={HeroImg} />
    <HeroOverlay
      title="About Me"
      text="I have ten years of trained piano experience. I am a versatile player with a lot to offer. I am comfortable playing in many different styles, Rock, Jazz, R&B, Soul, Folk/Americana. I have professional gear and a professional attitude."
    />
    <h2>Skills</h2>
    <SkillSet>
      <SkillsList header="In-Studio" list={inStudio} />
      <SkillsList header="On-Stage" list={onStage} />
    </SkillSet>
    <h2>Gear</h2>
    <SkillSet>
      <SkillsList header="Keyboards" list={keyboards} />
      <SkillsList header="Guitars" list={guitars} />
    </SkillSet>
  </MainBody>
)
