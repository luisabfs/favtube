import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Wrapper, Title, SmallButton } from './styles';

const SignUp = () => (
  <Container>
    <Title>Create new user</Title>

    <Wrapper>
      <Input placeholder="User" />
      <Input placeholder="Password" />
    </Wrapper>

    <Wrapper>
      <Button mode="dark">Sign up</Button>
      <SmallButton>login</SmallButton>
    </Wrapper>
  </Container>
);

export default SignUp;
