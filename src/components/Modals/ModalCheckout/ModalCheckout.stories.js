import React, { useState } from 'react';
import { ModalCheckout } from './ModalCheckout';
import Button from '../../Buttons/Button';
import Input from '../../Inputs/Input';
import InputMask from '../../Inputs/InputMask';

const Test = () => {
  const [opened, setOpen] = useState(false);
  const [isShowedPassword, showPassword] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  const togglePassword = () => {
    showPassword(() => !isShowedPassword);
  };

  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        click to open modal
      </button>
      <ModalCheckout
        opened={opened}
        closeModal={closeModal}
        modalWidth={328}
        title="Войти в аккаунт"
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <InputMask
              label="Номер телефона"
              type="tel"
              id="phone"
              placeholder="+380_________"
              phoneValue=""
              mask="+38 (099) 999-99-99"
              maskChar=""
            />
          </div>
          <div className="row">
            <Input
              id="password"
              label="Пароль"
              type={isShowedPassword ? 'text' : 'password'}
              showInputButton
              inputButtonText="Забыли пароль?"
              togglePassword={togglePassword}
              isShowedPassword={isShowedPassword}
            />
          </div>

          <Button
            className="btn_enter"
            bgColor="#FF7F00"
            textColor="#ffffff"
            disabled
          >
            Войти
          </Button>
        </form>
      </ModalCheckout>
    </div>
  );
};

export default {
  title: 'Modals/ModalCheckout',
  component: Test,
};

const Template = () => <Test />;

export const ModalAuth = Template.bind({});
