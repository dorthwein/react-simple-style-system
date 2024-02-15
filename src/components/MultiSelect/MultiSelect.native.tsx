import React from 'react';

import View from '../../components/View';
import Pressable from '../../components/Pressable';
import Text from '../../components/Text';

import StyleModifiersInterface from '../../types/StyleModifiersInterface';
import InputInterface from '../../types/InputInterface';
import OptionInterface from '../../types/OptionInterface';
import Icon from '../../components/Icon';

export interface MultiSelectInterface extends InputInterface {
  options?: OptionInterface[];
  optionContainerProps?: StyleModifiersInterface;
  selectedOptionContainerProps?: StyleModifiersInterface;
  optionLabelProps?: StyleModifiersInterface;
  selectedOptionLabelProps?: StyleModifiersInterface;
  name?: string;
}

const MultiSelect = (props: MultiSelectInterface) => {
  // const form = useFormContext();

  // const {name} = form.register(props.name || '', {
  //   ...(props.config || {}),
  // });

  const handleOnChange = (v: string[]): void => {
    let newValue = [...(props.value || [])];
    // includes(props.value, v))
    if ((props.value || []).indexOf(v) > -1) {
      // Remove value to array
      newValue = newValue.filter(i => i !== v);
    } else {
      // Add value to array
      newValue.push(v);
    }
    props.onChange(newValue);
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
      {options}
    </View>
  );
};

interface SelectOptionInterface {
  option: OptionInterface;
  value: any[];
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

  const selected = (props.value || []).indexOf(value) > -1;
  const containerProps =
    (selected
      ? props.selectedOptionContainerProps
      : props.optionContainerProps) || {};

  const labelProps =
    (selected ? props.selectedOptionLabelProps : props.optionLabelProps) || {};

  const style = {width: '48%'};
  return (
    <Pressable
      outlined
      style={style}
      onPress={onPress}
      marginR
      padding2x
      rounded
      marginB
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

export default MultiSelect;
