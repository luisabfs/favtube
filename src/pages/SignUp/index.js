import React, { useState, useCallback, useRef } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Input from '../../components/Input';

import getRealm from '../../services/realm';

import { Container, Wrapper, Title, SmallButton } from './styles';

const SignUp = ({ openModal, closeModal }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const passwordInputRef = useRef(null);

  const handleSubmit = useCallback(async () => {
    try {
      const realm = await getRealm();

      realm.write(() => {
        realm.create('User', { username, password, favorites: [] });
      });

      Alert.alert(
        'Successfully registered!',
        'You can log in the application now.',
      );

      closeModal();
    } catch (error) {
      Alert.alert(error.message);
    }
  }, [closeModal, username, password]);

  return (
    <Container>
      <Title>Create new user</Title>

      <Wrapper>
        <Input
          value={username}
          placeholder="User"
          returnKeyType="next"
          onChangeText={setUsername}
          autoCapitalize="none"
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
