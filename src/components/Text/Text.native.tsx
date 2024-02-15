import React from 'react';
import {Text as RNText} from 'react-native';
import useStyleModifiers from '../../hooks/useStyleModifiers';
import StyleModifiersInterface from '../../types/StyleModifiersInterface';

export default function Text(props: StyleModifiersInterface) {
  const style = useStyleModifiers(props);
  return <RNText style={style}>{props.children}</RNText>;
}
