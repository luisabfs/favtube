import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, ButtonText } from './styles';

const Button = ({ children, mode, ...rest }) => (
  <ButtonContainer mode={mode} {...rest}>
    <ButtonText mode={mode}>{children}</ButtonText>
  </ButtonContainer>
);

Button.defaultProps = {
  mode: 'light',
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  mode: PropTypes.oneOf(['light', 'dark']),
};

export default Button;
