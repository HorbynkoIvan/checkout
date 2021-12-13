/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { InputMaskOwn } from './InputMaskOwn';

const Test = ({ placeholder, label, id, type, mask, maskChar }) => {
  const [phoneValue, setPhoneValue] = useState('');

  const changeHandler = (event) => {
    setPhoneValue(event.target.value);
  };
  const checkPhoneButtons = () => console.log('checkButtons');
  const checkPhoneRegExp = () => console.log('checkButtons');
  return (
    <div>
      <InputMaskOwn
        label={label}
        type={type}
        id={id}
        placeholder={placeholder}
        phoneValue={phoneValue}
        changePhoneHandler={changeHandler}
        checkPhoneRegExp={checkPhoneRegExp}
        checkPhoneButtons={checkPhoneButtons}
        mask={mask}
        maskChar={maskChar}
      />
    </div>
  );
};

export default {
  title: 'Inputs/InputMask',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const InputPhoneMask = Template.bind({});

InputPhoneMask.args = {
  id: 'phone',
  type: 'tel',
  placeholder: '+380_________',
  label: 'Номер телефона',
  mask: '+38 (999) 999-99-99',
  maskChar: '',
};
