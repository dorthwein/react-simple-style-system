import {ActivityIndicator as RNActivityIndicator} from 'react-native';
import React from 'react';

import useStyleModifiers from '../../hooks/useStyleModifiers'
import StyleModifiersInterface from '../../types/StyleModifiersInterface'


export default function Pressable(props: StyleModifiersInterface) {
  const style = useStyleModifiers(props);

  return (
    <RNActivityIndicator {...props} style={style}>
      {props.children}
    </RNActivityIndicator>
  );
}
