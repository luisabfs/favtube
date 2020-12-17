import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Input from '../../components/Input';

// eslint-disable-next-line import/no-cycle
import SignUp from '../SignUp';

import { Container, Wrapper, Title, SmallButton } from './styles';

const SignIn = ({ setModal }) => (
  <Container>
    <Title>Welcome</Title>

    <Wrapper>
      <Input placeholder="User" />
      <Input placeholder="Password" />
    </Wrapper>

    <Wrapper>
      <Button mode="dark">Sign in</Button>
      <SmallButton
        onPress={() =>
          setModal({
            isVisible: true,
            content: () => <SignUp setModal={setModal} />,
          })
        }
      >
        new user
      </SmallButton>
    </Wrapper>
  </Container>
);

SignIn.propTypes = {
  setModal: PropTypes.func.isRequired,
};

export default SignIn;
