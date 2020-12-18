import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Input from '../../components/Input';

// eslint-disable-next-line import/no-cycle
import SignIn from '../SignIn';

import getRealm from '../../services/realm';

import { Container, Wrapper, Title, SmallButton } from './styles';

const SignUp = ({ setModal }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = useCallback(async () => {
    try {
      const realm = await getRealm();

      realm.write(() => {
        realm.create('User', { email, password });
      });

      Alert.alert(
        'Successfully registered!',
        'You can log in the application now.',
      );

      setModal({
        isVisible: false,
        content: () => <SignIn setModal={setModal} />,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  }, [email, password, setModal]);

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
          Sign up
        </Button>
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
};

SignUp.propTypes = {
  setModal: PropTypes.func.isRequired,
};

export default SignUp;
