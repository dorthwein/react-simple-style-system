import React from 'react';
import {
  Switch as RNSwitch,
  NativeSyntheticEvent,
  SwitchChangeEventData,
} from 'react-native';
import useStyleModifiers from '../../hooks/useStyleModifiers';
import InputInterface from '../../types/InputInterface';

export interface SwitchInterface extends InputInterface {}

const Switch = (props: SwitchInterface) => {
  const style = useStyleModifiers(props);

  const handleOnChange = (
    e: NativeSyntheticEvent<SwitchChangeEventData>,
  ): void => {
    const v: boolean = e.nativeEvent.value;
    props.onChange(v);
  };

  return (
    <RNSwitch {...props} onChange={handleOnChange} style={style}>
      {props.children}
    </RNSwitch>
  );
};

export default Switch;
