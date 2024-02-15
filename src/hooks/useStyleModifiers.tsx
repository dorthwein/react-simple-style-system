import React, {useMemo} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

const useStyleModifiers = (props: any) => {  
  const {styles}: any = React.useContext(ThemeContext);
  let result: any = {};

  if (props) {
    Object.keys(props).forEach(key => {
      if (styles[key] && props[key]) {
        result = {...result, ...(styles[key] || {})};
      }
    });
  }

  const style =  useMemo(() => ({...result, ...(props.style || {})}), [props])
  return style
};

export default useStyleModifiers;
