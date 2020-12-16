import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Wrapper, Title, SmallButton } from './styles';

const SignIn = () => (
  <Container>
    <Title>Welcome</Title>

    <Wrapper>
      <Input placeholder="User" />
      <Input placeholder="Password" />
    </Wrapper>

    <Wrapper>
      <Button mode="dark">Sign in</Button>
      <SmallButton>new user</SmallButton>
    </Wrapper>
  </Container>
);

export default SignIn;
