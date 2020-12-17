import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Input from '../../components/Input';

// eslint-disable-next-line import/no-cycle
import SignIn from '../SignIn';

import { Container, Wrapper, Title, SmallButton } from './styles';

const SignUp = ({ setModal }) => (
  <Container>
    <Title>Create new user</Title>

    <Wrapper>
      <Input placeholder="User" />
      <Input placeholder="Password" />
    </Wrapper>

    <Wrapper>
      <Button mode="dark">Sign up</Button>
      <SmallButton
        onPress={() =>
          setModal({
            isVisible: true,
            content: () => <SignIn setModal={setModal} />,
          })
        }
      >
        login
      </SmallButton>
    </Wrapper>
  </Container>
);

SignUp.propTypes = {
  setModal: PropTypes.func.isRequired,
};

export default SignUp;
