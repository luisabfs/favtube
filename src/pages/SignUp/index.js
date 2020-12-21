import React, { useState, useCallback, useRef } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Input from '../../components/Input';

import getRealm from '../../services/realm';

import { Container, Wrapper, Title, SmallButton } from './styles';

const SignUp = ({ openModal, closeModal }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const passwordInputRef = useRef(null);

  const handleSubmit = useCallback(async () => {
    try {
      const realm = await getRealm();

      realm.write(() => {
        realm.create('User', { email, password, favorites: [] });
      });

      Alert.alert(
        'Successfully registered!',
        'You can log in the application now.',
      );

      closeModal();
    } catch (error) {
      Alert.alert(error.message);
    }
  }, [closeModal, email, password]);

  return (
    <Container>
      <Title>Create new user</Title>

      <Wrapper>
        <Input
          value={email}
          placeholder="User"
          returnKeyType="next"
          onChangeText={setEmail}
          keyboardType="email-address"
          onSubmitEditing={() => {
            passwordInputRef.current.focus();
          }}
        />

        <Input
          ref={passwordInputRef}
          value={password}
          secureTextEntry
          placeholder="Password"
          onChangeText={setPassword}
          onSubmitEditing={handleSubmit}
        />
      </Wrapper>

      <Wrapper>
        <Button mode="dark" onPress={handleSubmit}>
          Sign up
        </Button>
        <SmallButton onPress={() => openModal('signin')}>login</SmallButton>
      </Wrapper>
    </Container>
  );
};

SignUp.propTypes = {
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default SignUp;
