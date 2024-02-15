import React from 'react';
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

  return {...result, ...(props.style || {})};
};

export default useStyleModifiers;
