import React from 'react';
import { Image } from 'react-native';
import Button from '../../components/Button';

import Logo from '../../assets/logo.png';

import { Container, Wrapper, Title } from './styles';

const Onboarding = () => (
  <Container>
    <Wrapper>
      <Image source={Logo} />
      <Title>welcome to the jungle</Title>
    </Wrapper>

    <Wrapper>
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
    </Wrapper>
  </Container>
);
export default Onboarding;
