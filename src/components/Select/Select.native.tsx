import React from 'react';
import ActivityIndicator from '../../components/ActivityIndicator';
import View from '../../components/View';
import Pressable from '../../components/Pressable';
import Text from '../../components/Text';
import StyleModifiersInterface from '../../types/StyleModifiersInterface';
import InputInterface from '../../types/InputInterface';
import OptionInterface from '../../types/OptionInterface';

import Icon from '../../components/Icon';

export interface SelectInterface extends InputInterface {
  allowUndefined?: boolean;
  options: OptionInterface[];
  optionContainerProps?: StyleModifiersInterface;
  selectedOptionContainerProps?: StyleModifiersInterface;
  optionLabelProps?: StyleModifiersInterface;
  selectedOptionLabelProps?: StyleModifiersInterface;
  name?: string;
}

const Select = ({allowUndefined = true, ...props}: SelectInterface) => {
  const handleOnChange = (v: string[]): void => {
    if (v === props.value && allowUndefined) {
      props.onChange(undefined);
    } else if (v) {
      props.onChange(v);
    }
  };

  const options: React.ReactElement[] = [];

  (props.options || []).forEach((option: OptionInterface) => {
    options.push(
      <SelectOption
        optionLabelProps={props.optionLabelProps}
        optionContainerProps={props.optionContainerProps}
        selectedOptionLabelProps={props.selectedOptionLabelProps}
        selectedOptionContainerProps={props.selectedOptionContainerProps}
        onChange={handleOnChange}
        value={props.value}
        key={`${option.value}`}
        option={option}
      />,
    );
  });

  return (
    <View row flexWrap {...props}>
      {props.loading ? <ActivityIndicator centerSelf marginR /> : options}
    </View>
  );
};

interface SelectOptionInterface {
  option: OptionInterface;
  value: string | number | undefined;
  onChange: Function;
  optionContainerProps?: StyleModifiersInterface;
  selectedOptionContainerProps?: StyleModifiersInterface;
  optionLabelProps?: StyleModifiersInterface;
  selectedOptionLabelProps?: StyleModifiersInterface;
}

const SelectOption = (props: SelectOptionInterface) => {
  const {value, label, disabled} = props.option;

  const onPress = () => {
    props.onChange(value);
  };

  const selected = value === props.value;

  const containerProps =
    (selected
      ? props.selectedOptionContainerProps
      : props.optionContainerProps) || {};

  const labelProps =
    (selected ? props.selectedOptionLabelProps : props.optionLabelProps) || {};

  const style = {width: '48%'};
  return (
    <Pressable
      style={style}
      onPress={onPress}
      spacedR
      padded
      rounded
      spacedB
      disabled={disabled}
      row
      centerH
      {...containerProps}
      elevated={selected}>
      {selected ? (
        <Icon name="check" marginR body {...labelProps} />
      ) : undefined}

      <Text
        body
        flex
        lineThrough={disabled}
        {...labelProps}
        onDisabled={disabled}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Select;
