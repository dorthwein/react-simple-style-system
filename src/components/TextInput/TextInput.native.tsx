import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from 'react-native';

import useStyleModifiers from '../../hooks/useStyleModifiers';
import InputInterface from '../../types/InputInterface';

const TextInput = (props: InputInterface) => {
  const style = useStyleModifiers(props);

  const handleOnChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const v: string = e.nativeEvent.text || '';
    if (props.onChange) {
      props.onChange(v || '');
    }
  };

  return (
    <RNTextInput {...props} onChange={handleOnChange} style={style}>
      {props.children}
    </RNTextInput>
  );
};

export default TextInput;
