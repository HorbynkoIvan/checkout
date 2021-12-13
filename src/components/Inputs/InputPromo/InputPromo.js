import React, { useState } from 'react';
import { any } from 'prop-types';
import { ScInputPromo } from './styled';

export const InputPromo = ({ data }) => {
  const [value, setValue] = useState('');

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    data.onChangeFunc(e.target.value);
  };

  return (
    <ScInputPromo disabled={data.disabled}>
      <input
        disabled={data.disabled}
        type={data.type}
        name={data.name}
        value={value}
        autoComplete="off"
        onChange={onChangeHandler}
      />
      {!value.length && <span className="placeholder">{data.placeholder}</span>}

      {data.error && <span className="error__text">{data.errorText}</span>}
    </ScInputPromo>
  );
};

InputPromo.propTypes = {
  data: any,
};
