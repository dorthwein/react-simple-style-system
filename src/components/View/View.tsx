import React from 'react';

import useStyleModifiers from '../../hooks/useStyleModifiers'
import StyleModifiersInterface from '../../types/StyleModifiersInterface'

export default function View(props: StyleModifiersInterface) {
  const style = useStyleModifiers({
    ...props, 
    style: { display: 'flex', ...(props.style || {}) }
  });

  return <div style={style}>{props.children}</div>;
}
