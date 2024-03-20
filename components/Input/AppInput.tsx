import { Text, TextInput } from '@mantine/core';
import React from 'react';
import classes from './style.module.css';
import { IconSearch, TablerIconsProps } from '@tabler/icons-react';

interface Props {
  placeholder?: string;
  flex?: number;
  leftIcon?: React.ReactNode;
  label?: string;
}
const AppInput: React.FC<Props> = ({ placeholder, flex, leftIcon, label }) => {
  return (
    <TextInput
      flex={flex}
      leftSection={leftIcon}
      placeholder={placeholder}
      label={
        label && (
          <Text mb={5} size="xs">
            {label}
          </Text>
        )
      }
      className={classes.text__input}
      w={250}
    />
  );
};

export default AppInput;
