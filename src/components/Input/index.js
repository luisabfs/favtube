import React, { useRef, useImperativeHandle, forwardRef } from 'react';

import { TextInput } from './styles';

const Input = ({ ...rest }, ref) => {
  const inputElementRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return <TextInput blurOnSubmit={false} ref={inputElementRef} {...rest} />;
};

export default forwardRef(Input);
