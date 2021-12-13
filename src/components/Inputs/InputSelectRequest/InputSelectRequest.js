import React, { useRef, useState } from 'react';
import { object } from 'prop-types';
import { ScInputSelectRequest } from './styled';
import { ReactComponent as ChevronIcon } from '../../../assets/img/chevron.svg';

export const InputSelectRequest = ({ data }) => {
  const stateInit = {
    isOpen: false,
    title: data.title || '',
    inputValue: '',
    inputId: data.id || '',
    requestData: [],
  };
  const [state, setState] = useState(stateInit);
  const selectRef = useRef();

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setState({ ...state, isOpen: false });
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  };

  const clickTitleHandler = (e) => {
    setState({ ...state, isOpen: true });
    handleClickOutside(e);
  };

  const requestHandler = new Promise((resolve) => {
    resolve([
      {
        title: 'Львов',
        id: 1,
      },
      {
        title: 'Харьков',
        id: 2,
      },
    ]);
  });

  const onChangeHandler = (e) => {
    if (e.target.value.length > 3) {
      setState({ ...state, inputValue: e.target.value });
      requestHandler.then((result) => {
        setState({ ...state, inputValue: e.target.value, requestData: result });
      });
    } else {
      setState({ ...state, inputValue: e.target.value });
    }
  };

  const resultDataKeyClickHandler = () => {
    setState({ ...state, isOpen: false });
  };

  const requestItems = state.requestData.map((item, i) => (
    <div
      role="presentation"
      onClick={resultDataKeyClickHandler}
      data-id={item.id}
      key={i}
    >
      {item.title}
    </div>
  ));

  return (
    <ScInputSelectRequest ref={selectRef}>
      <div role="presentation" onClick={clickTitleHandler} data-id={state.id}>
        {state.title}
        <ChevronIcon />
      </div>
      {state.isOpen && (
        <section>
          <label>
            <input
              autoComplete="off"
              value={state.inputValue}
              onChange={onChangeHandler}
              name="title"
              type="text"
            />
          </label>

          <div>{requestItems}</div>
        </section>
      )}
    </ScInputSelectRequest>
  );
};

InputSelectRequest.propTypes = {
  data: object,
};
