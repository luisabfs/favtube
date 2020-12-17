import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, ButtonText } from './styles';

const Button = ({ children, mode, onPress, ...rest }) => (
  <ButtonContainer activeOpacity={0.8} mode={mode} onPress={onPress} {...rest}>
    <ButtonText mode={mode}>{children}</ButtonText>
  </ButtonContainer>
);

Button.defaultProps = {
  mode: 'light',
  onPress: () => null,
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  mode: PropTypes.oneOf(['light', 'dark']),
  onPress: PropTypes.func,
};

export default Button;
