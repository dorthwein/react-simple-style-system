import React from 'react';
import {
  Platform,
  TouchableOpacity as RNTouchableOpacity,
  TouchableHighlight as RNTouchableHighlight,
} from 'react-native';
import useStyleModifiers from '../../hooks/useStyleModifiers';
import StyleModifiersInterface from '../../types/StyleModifiersInterface';

export default function Pressable(props: StyleModifiersInterface) {
  const style = useStyleModifiers(props);

  if (Platform.OS === 'android') {
    return (
      <RNTouchableHighlight {...props} style={style}>
        {props.children}
      </RNTouchableHighlight>
    );
  } else {
    return (
      <RNTouchableOpacity {...props} style={style}>
        {props.children}
      </RNTouchableOpacity>
    );
  }
}
