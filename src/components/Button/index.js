import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, ButtonText } from './styles';

const Button = ({ children, mode, disabled, onPress, ...rest }) => (
  <ButtonContainer
    disabled={disabled}
    activeOpacity={0.6}
    mode={mode}
    onPress={onPress}
    {...rest}
  >
    <ButtonText mode={mode}>{children}</ButtonText>
  </ButtonContainer>
);

Button.defaultProps = {
  mode: 'light',
  disabled: false,
  onPress: () => null,
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  mode: PropTypes.oneOf(['light', 'dark']),
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
