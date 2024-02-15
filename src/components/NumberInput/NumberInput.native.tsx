import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from 'react-native';

import useStyleModifiers from '../../hooks/useStyleModifiers';
import InputInterface from '../../types/InputInterface';

const NumberInput = (props: InputInterface) => {
  const style = useStyleModifiers(props);
  const handleOnChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const v: string = e.nativeEvent.text || '';
    props.onChange(v || '');
  };

  return (
    <RNTextInput
      {...props}
      keyboardType="numeric"
      onChange={handleOnChange}
      value={props.value}
      style={style}>
      {props.children}
    </RNTextInput>
  );
};

export default NumberInput;
