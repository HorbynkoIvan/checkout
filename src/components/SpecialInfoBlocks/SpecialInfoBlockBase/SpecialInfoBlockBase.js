import React from 'react';
import { any, bool, func } from 'prop-types';
import { ScSpecialInfoTop, SpecialInfoBlockBaseSC } from './styled';

import { InfoLabel } from '../../InfoLabel/InfoLabel';
import { ReactComponent as DeleteIcon } from '../../../assets/img/delete-icon.svg';

export const SpecialInfoBlockBase = ({
  children,
  labelOptions,
  clickHideHandler,
  title,
  withoutDeleteButton,
  small,
  simpleBlock,
}) => (
  <SpecialInfoBlockBaseSC>
    <ScSpecialInfoTop small={small} simpleBlock={simpleBlock}>
      <InfoLabel {...labelOptions} />

      {!withoutDeleteButton && (
        <button type="button" onClick={clickHideHandler}>
          <DeleteIcon />
        </button>
      )}

      <div>{title}</div>
    </ScSpecialInfoTop>

    <div>{children}</div>
  </SpecialInfoBlockBaseSC>
);
SpecialInfoBlockBase.propTypes = {
  children: any,
  title: any,
  labelOptions: any,
  clickHideHandler: func,
  withoutDeleteButton: bool,
  small: bool,
  simpleBlock: bool,
};
