import React from 'react';
import { string } from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { TooltipLibSC, TooltipLibBlockSC } from './styled';
import { ReactComponent as QuestionIcon } from '../../assets/img/question.svg';

export const TooltipLib = ({ tooltipText }) => (
  <TooltipLibSC>
    <button type="button" data-tip="">
      <QuestionIcon />
    </button>

    <ReactTooltip
      type="light"
      backgroundColor="transparent"
      arrowColor="transparent"
      multiline
      overridePosition={({ left, top }, _e, _t, node) => ({
        top: typeof node === 'string' ? top : Math.max(top, 10),
        left: typeof node === 'string' ? left : Math.max(left, 0),
      })}
    >
      <TooltipLibBlockSC>{tooltipText}</TooltipLibBlockSC>
    </ReactTooltip>
  </TooltipLibSC>
);

TooltipLib.propTypes = {
  tooltipText: string.isRequired,
};
