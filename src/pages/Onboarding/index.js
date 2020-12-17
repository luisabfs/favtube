import React, { useState, useCallback } from 'react';
import { Image } from 'react-native';

import Button from '../../components/Button';
import Modal from '../../components/Modal';

import SignIn from '../SignIn';
import SignUp from '../SignUp';

import Logo from '../../assets/logo.png';

import { Container, Wrapper, Title } from './styles';

const Onboarding = () => {
  const [modal, setModal] = useState({
    isVisible: false,
    content: () => null,
  });

  const openSignInModal = useCallback(() => {
    setModal({
      isVisible: true,
      content: () => <SignIn setModal={setModal} />,
    });
  }, []);

  const openSignUpModal = useCallback(() => {
    setModal({
      isVisible: true,
      content: () => <SignUp setModal={setModal} />,
    });
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <Image source={Logo} />
          <Title>welcome to the jungle</Title>
        </Wrapper>

        <Wrapper>
          <Button onPress={openSignInModal}>Sign In</Button>
          <Button onPress={openSignUpModal}>Sign Up</Button>
        </Wrapper>
      </Container>

      <Modal modalVisible={modal.isVisible} setModal={setModal}>
        {modal.content()}
      </Modal>
    </>
  );
};

export default Onboarding;
