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
    content: '',
  });

  const openModal = useCallback(content => {
    setModal({
      isVisible: true,
      content,
    });
  }, []);

  const closeModal = useCallback(() => {
    setModal({
      isVisible: false,
      content: '',
    });
  }, [setModal]);

  return (
    <>
      <Container>
        <Wrapper>
          <Image source={Logo} />
          <Title>welcome to the jungle</Title>
        </Wrapper>

        <Wrapper>
          <Button onPress={() => openModal('signin')}>Sign In</Button>
          <Button onPress={() => openModal('signup')}>Sign Up</Button>
        </Wrapper>
      </Container>

      <Modal modalVisible={modal.isVisible} closeModal={closeModal}>
        {modal.content === 'signin' ? (
          <SignIn setModal={openModal} />
        ) : (
          <SignUp openModal={openModal} closeModal={closeModal} />
        )}
      </Modal>
    </>
  );
};

export default Onboarding;
