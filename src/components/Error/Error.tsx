import React from 'react';
import View from '../../components/View';
import Text from '../../components/Text';
import StyleModifiersInterface from '../../types/StyleModifiersInterface';

export interface ErrorInterface extends StyleModifiersInterface {
  error?: any;
}

const Error = ({error, ...props}: ErrorInterface) => {
  if (error) {
    return (
      <View padded rounded danger marginB>
        <Text body onDanger {...props}>
          {error.message ? error.message : ''}
          {error.type === 'required' ? '*This field is required' : ''}
        </Text>
      </View>
    );
  }
  return <></>;
};

export default Error;
