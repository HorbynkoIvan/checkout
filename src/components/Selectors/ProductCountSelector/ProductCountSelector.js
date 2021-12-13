import React, { useState } from 'react';

import { array } from 'prop-types';
import { ProductCountSelectorStyled, SelectStyled } from './styled';

export const ProductCountSelector = ({ data }) => {
  const state = data.map((item, i) => ({
    value: item.value,
    label: (
      <div className="select_label" key={i}>
        {item.value}
      </div>
    ),
  }));

  const [selectedOption, selectOption] = useState(state[0]);
  const handleChange = (value) => {
    selectOption(value);
  };
  return (
    <ProductCountSelectorStyled>
      <SelectStyled
        className="select_count"
        classNamePrefix="select"
        isDisabled={false}
        isLoading={false}
        isSearchable={false}
        options={state}
        value={selectedOption}
        onChange={handleChange}
      />
    </ProductCountSelectorStyled>
  );
};

ProductCountSelector.propTypes = {
  data: array,
};
