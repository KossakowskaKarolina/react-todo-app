import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {infoPage} from '../../data/dataStore';


const Info = () => (
  <Container>
    <Hero titleText={infoPage.title} picture={infoPage.image}></Hero>
    <p>{infoPage.description}</p>
  </Container>
);

export default Info;