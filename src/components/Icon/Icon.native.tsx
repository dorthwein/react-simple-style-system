import React from 'react';
import useStyleModifiers from '../../hooks/useStyleModifiers';
import StyleModifiersInterface from '../../types/StyleModifiersInterface';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export interface IconInterface extends StyleModifiersInterface {
  name: string;
  size?: number;
  iconFamily?: string;
}

const Icon = (props: IconInterface) => {
  const style = useStyleModifiers(props);
  let iconFamily = props.iconFamily || 'FontAwesome6';
  if (iconFamily === 'FontAwesome6') {
    return <FontAwesome6 disabled {...props} style={style} name={props.name} />;
  }

  return <></>;
};

export default Icon;
