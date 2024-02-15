import React, {useState} from 'react';
import {Platform} from 'react-native';
import dayjs from 'dayjs';
import RNDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

import View from '../../components/View';
import Text from '../../components/Text';
import Icon from '../../components/Icon';

import useStyleModifiers from '../../hooks/useStyleModifiers';
import InputInterface from '../../types/InputInterface';
import useTheme from '../../hooks/useTheme';
import StyleModifiersInterface from '../../types/StyleModifiersInterface';

import Pressable from '../Pressable';

export interface DateTimePickerInterface extends InputInterface {
  mode: string;
  labelProps?: StyleModifiersInterface;
  containerProps?: StyleModifiersInterface;
}

const DateTimePicker = ({
  containerProps,
  labelProps,
  ...props
}: DateTimePickerInterface) => {
  const [active, setActive] = useState(false);
  const onAndroidPress = () => {
    setActive(true);
  };

  const theme = useTheme();
  const labelStyle = useStyleModifiers(props.labelProps || {});

  const handleOnChange = (e: DateTimePickerEvent): void => {
    setActive(false);
    const v = dayjs(e.nativeEvent.timestamp).toISOString();
    props.onChange(v);
  };

  const dateValue = dayjs(props.value || new Date()).toDate();

  return (
    <View {...props}>
      <View left row center marginL {...(containerProps || {})}>
        <Icon name="calendar-days" h3 {...(labelProps || {})} />
        {Platform.OS === 'ios' || active ? (
          <RNDateTimePicker
            themeVariant={theme.mode}
            style={labelStyle}
            value={dateValue}
            mode={'date'}
            is24Hour={true}
            onChange={handleOnChange}
          />
        ) : undefined}
        {Platform.OS === 'android' ? (
          <>
            <Pressable onPress={onAndroidPress} flex>
              <Text marginL>
                {dayjs(props.value).format('LL') || 'Select Date'}
              </Text>
            </Pressable>
          </>
        ) : undefined}
      </View>
    </View>
  );
};

export default DateTimePicker;
