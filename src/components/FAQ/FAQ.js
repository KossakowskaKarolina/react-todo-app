import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {faqPage} from '../../data/dataStore';


const FAQ = () => (
  <Container>
    <Hero titleText={faqPage.title} picture={faqPage.image}></Hero>
    <p>{faqPage.description}</p>
  </Container>
);

export default FAQ;