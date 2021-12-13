/* eslint-disable react/prop-types */
import React from 'react';
import { ModalPasswordRecovery } from './ModalPasswordRecovery';
import Button from '../../Buttons/Button';
import Input from '../../Inputs/Input';
import InputMask from '../../Inputs/InputMask';

const Test = ({
  title,
  showBtnReturn,
  showRecoveryCode,
  disabled,
  phoneValue,
  codeValue,
  showInputButton,
  getPasswordBtn,
}) => (
  <div>
    <ModalPasswordRecovery
      opened
      modalWidth={328}
      title={title}
      showBtnReturn={showBtnReturn}
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <InputMask
            label="Номер телефона"
            type="tel"
            id="phone"
            placeholder="+380_________"
            phoneValue={phoneValue}
            mask="+38 (099) 999-99-99"
            maskChar=""
          />
        </div>
        {showRecoveryCode && (
          <div className="row">
            <Input
              id="recoveryCode"
              label="Код"
              type="text"
              showInputButton={showInputButton}
              inputButtonText="Отправить через 59 сек"
              value={codeValue}
            />
          </div>
        )}
        {getPasswordBtn ? (
          <Button
            className="btn"
            bgColor="#ffffff"
            textColor="#807C77"
            disabled={disabled}
          >
            Отправить
          </Button>
        ) : (
          <Button
            className="btn"
            bgColor="#FF7F00"
            textColor="#ffffff"
            disabled={disabled}
          >
            Войти
          </Button>
        )}
      </form>
    </ModalPasswordRecovery>
  </div>
);
export default {
  title: 'Modals/ModalPasswordRecovery',
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const Step1 = Template.bind({});

Step1.args = {
  title: 'Восстановление пароля',
  showBtnReturn: true,
  showRecoveryCode: false,
  disabled: true,
  phoneValue: '',
  codeValue: '',
  showInputButton: false,
  getPasswordBtn: true,
};

export const Step2 = Template.bind({});

Step2.args = {
  title: 'Восстановление пароля',
  showBtnReturn: true,
  showRecoveryCode: false,
  disabled: false,
  phoneValue: '+380935554433',
  codeValue: '',
  showInputButton: false,
  getPasswordBtn: true,
};

export const Step3 = Template.bind({});

Step3.args = {
  title: 'Восстановление пароля',
  showBtnReturn: true,
  showRecoveryCode: true,
  disabled: true,
  phoneValue: '+380935554433',
  codeValue: '',
  showInputButton: true,
};

export const Step4 = Template.bind({});

Step4.args = {
  title: 'Восстановление пароля',
  showBtnReturn: true,
  showRecoveryCode: true,
  disabled: false,
  phoneValue: '+380935554433',
  codeValue: '2345',
  showInputButton: true,
};
