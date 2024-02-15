import React from 'react';
import {SafeAreaView as RNSafeAreaView} from 'react-native';
import useStyleModifiers from '../../hooks/useStyleModifiers';
import StyleModifiersInterface from '../../types/StyleModifiersInterface';

export default function SafeAreaView(props: StyleModifiersInterface) {
  const style = useStyleModifiers(props);
  return <RNSafeAreaView style={style}>{props.children}</RNSafeAreaView>;
}
