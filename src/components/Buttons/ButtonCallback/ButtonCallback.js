import React from 'react';
import { ScButtonCallback } from './styled';

export const ButtonCallback = () => {
  const openModal = () => {
    console.log('open modal');
  };
  return (
    <ScButtonCallback onClick={openModal} type="button">
      Заказать звонок
    </ScButtonCallback>
  );
};
