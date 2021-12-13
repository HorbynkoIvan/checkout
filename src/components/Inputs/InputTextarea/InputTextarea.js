import React, { useState } from 'react';
import { ScInputTextarea } from './styled';

export const InputTextarea = () => {
  const [state, setState] = useState();
  const valueHandler = (e) => {
    setState(e.target.value);
  };
  return (
    <ScInputTextarea>
      <span>Комментарий</span>
      <textarea
        onChange={valueHandler}
        value={state}
        placeholder="Хочу обсудить доставку"
      />
    </ScInputTextarea>
  );
};
