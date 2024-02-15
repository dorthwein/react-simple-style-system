import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import Error from '../../components/Error';
import View from '../../components/View';
import Text from '../../components/Text';
import StyleModifiersInterface from '../../types/StyleModifiersInterface';

export interface InputContainerInterface extends StyleModifiersInterface {
  name: string;
  label?: string;
  containerProps?: StyleModifiersInterface;
  validations?: {
    required?: boolean;
    valueAsNumber?: boolean;
    email?: boolean;
    phoneNumber?: boolean;
  };
}

export default function InputContainer({
  label,
  validations = {},
  ...props
}: InputContainerInterface) {
  const form = useFormContext();
  const {
    formState: {errors},
  } = form;

  const config: any = {
    ...(props.config || {}),
  };

  // Number Validation
  if (validations.required) {
    config.valueAsNumber = true;
  }

  // Required Validation
  if (validations.required) {
    config.required = true;
  }

  // Email Validation
  if (validations.email) {
    config.pattern = {
      value: /\S+@\S+\.\S+/,
      message: 'Invalid email format',
    };
  }

  // Phone Validation
  if (validations.phoneNumber) {
    config.pattern = {
      value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      message: 'Invalid phone number',
    };
  }

  const {name} = form.register(props.name || '', config);

  return (
    <Controller
      control={form.control}
      name={name}
      render={({field: {onChange, value}}) => {
        const passProps: any = {onChange, value};

        const childrenWithProps = React.Children.map(props.children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, passProps);
          }
          return child;
        });

        return (
          <View {...(props.containerProps || {})}>
            {label ? (
              <Text label spacedB {...props}>
                {label}
              </Text>
            ) : undefined}
            {childrenWithProps}
            <Error error={errors[name]} name={name} />
          </View>
        );
      }}
    />
  );
}
