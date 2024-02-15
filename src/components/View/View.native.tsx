import React from 'react';
import {View as RNView} from 'react-native';

import useStyleModifiers from '../../hooks/useStyleModifiers';
import StyleModifiersInterface from '../../types/StyleModifiersInterface';

export default function View(props: StyleModifiersInterface) {
  const style = useStyleModifiers(props);
  return <RNView style={style}>{props.children}</RNView>;
}
