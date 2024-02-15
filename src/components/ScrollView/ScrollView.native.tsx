import React from 'react';
import {ScrollView as RNScrollView} from 'react-native';
import useStyleModifiers from '../../hooks/useStyleModifiers';
import StyleModifiersInterface from '../../types/StyleModifiersInterface';

export default function ScrollView(props: StyleModifiersInterface) {
  const style = useStyleModifiers(props);
  return <RNScrollView style={style}>{props.children}</RNScrollView>;
}
