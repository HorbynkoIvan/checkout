import React, { useState } from 'react';
import { array } from 'prop-types';
import { ScInputSelect } from './styled';

import { ReactComponent as ChevronIcon } from '../../assets/img/chevron.svg';

export const InputSelect = ({ data }) => {
  const initState = {
    isOpen: false,
    value: data[0].value,
    title: data[0].title,
  };
  const [state, setState] = useState(initState);

  const clickHandler = (e) => {
    setState({
      ...state,
      isOpen: false,
      value: e.target.dataset.value,
      title: e.target.dataset.title,
    });
  };
  const openHideHandler = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };

  const items = data.map((item, i) => (
    <p
      tabIndex={-1 - i}
      role="presentation"
      onClick={clickHandler}
      onKeyDown={() => {}}
      key={i}
      data-value={item.value}
      data-title={item.title}
    >
      {item.title}
    </p>
  ));

  return (
    <ScInputSelect>
      <section>
        <div
          role="presentation"
          onClick={openHideHandler}
          data-select-value={state.value}
        >
          {state.title}
          <ChevronIcon />
        </div>

        {state.isOpen && <div>{items}</div>}
      </section>
    </ScInputSelect>
  );
};

InputSelect.propTypes = {
  data: array,
};
