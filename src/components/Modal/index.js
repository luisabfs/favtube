import React, { useCallback } from 'react';
import { View, Modal as RNModal } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../Button';

import { Container, Content } from './styles';

const Modal = ({ modalVisible, setModal, children }) => {
  const closeModal = useCallback(() => {
    setModal({
      isVisible: false,
      content: () => null,
    });
  }, [setModal]);

  return (
    <View>
      <RNModal animationType="slide" transparent visible={modalVisible}>
        <Container>
          <Content>
            <Button style={{ alignSelf: 'flex-end' }} onPress={closeModal}>
              X
            </Button>

            {children}
          </Content>
        </Container>
      </RNModal>
    </View>
  );
};

Modal.defaultProps = {
  children: () => null,
};

Modal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Modal;
