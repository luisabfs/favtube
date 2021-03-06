import React from 'react';
import { View, Modal as RNModal } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../Button';

import { Container, Content } from './styles';

const Modal = ({ modalVisible, closeModal, children }) => (
  <View>
    <RNModal animationType="slide" transparent visible={modalVisible}>
      <Container>
        <Content>
          <Button style={{ alignSelf: 'flex-end' }} onPress={closeModal}>
            <Icon name="close" size={30} />
          </Button>

          {children}
        </Content>
      </Container>
    </RNModal>
  </View>
);

Modal.defaultProps = {
  children: () => null,
};

Modal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Modal;
