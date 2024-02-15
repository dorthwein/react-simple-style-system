import React from 'react';

import {
  TextInput as RNTextInput,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from 'react-native';

import useStyleModifiers from '../../hooks/useStyleModifiers';
import InputInterface from '../../types/InputInterface';

export interface TextAreaInputInterface extends InputInterface {
  numberOfLines?: number;
}

const TextAreaInput = (props: TextAreaInputInterface) => {
  const style = useStyleModifiers(props);

  const modifiedStyle = {maxHeight: 300, minHeight: 100, ...style};
  const handleOnChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const v: string = e.nativeEvent.text || '';
    props.onChange(v || '');
  };
  return (
    <RNTextInput
      multiline
      numberOfLines={props.numberOfLines || 4}
      onChange={handleOnChange}
      value={props.value}
      style={modifiedStyle}
    />
  );
};

export default TextAreaInput;
