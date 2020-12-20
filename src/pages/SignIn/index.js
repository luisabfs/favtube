import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';

import { Container, Wrapper, Title, SmallButton } from './styles';

const SignIn = ({ setModal }) => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = useCallback(async () => {
    try {
      await signIn({ email, password });
    } catch (error) {
      Alert.alert(error.message);
    }
  }, [email, password, signIn]);

  return (
    <Container>
      <Title>Welcome</Title>

      <Wrapper>
        <Input
          value={email}
          placeholder="User"
          returnKeyType="next"
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input
          value={password}
          secureTextEntry
          placeholder="Password"
          onChangeText={setPassword}
        />
      </Wrapper>

      <Wrapper>
        <Button mode="dark" onPress={handleSubmit}>
          Sign in
        </Button>
        <SmallButton
          onPress={() =>
            setModal({
              isVisible: true,
              content: 'signup',
            })
          }
        >
          new user
        </SmallButton>
      </Wrapper>
    </Container>
  );
};

SignIn.propTypes = {
  setModal: PropTypes.func.isRequired,
};

export default SignIn;
