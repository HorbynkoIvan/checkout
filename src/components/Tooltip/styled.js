import styled from 'styled-components';
import { ReactComponent as QuestionIcon } from '../../assets/img/question.svg';
import { device } from '../../assets/css/theme';

export const TooltipStyled = styled.div`
  position: relative;
  display: inline-flex;
  height: 24px;
  width: 24px;
  min-width: 24px;
  min-height: 24px;

  .tooltip_btn {
    height: 100%;
    width: 100%;
    border: none;
    padding: 0;
    background: none;
    outline: none;
    cursor: pointer;

    & > svg {
      pointer-events: none;
    }
  }

  .tooltip {
    z-index: 1000;
    position: absolute;
    ${(props) =>
      props.topTooltip
        ? 'bottom: calc(100% + 5px);'
        : 'top: calc(100% + 5px);'};
    ${(props) => (props.rightTooltip ? 'right: 0;' : 'left: 0;')};
    min-width: 328px;
    padding: 16px;
    font: 400 14px / 24px ${({ theme }) => theme.mainFont};
    background-color: #ffffff;
    display: ${(props) => (props.opened ? 'block' : 'none')};
    border: 1px solid #e2dfd9;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: #000000;
  }

  @media only screen and ${device.tablet} {
    .tooltip {
      min-width: 240px;
    }
  }
  @media only screen and ${device.mobile} {
    .tooltip {
      min-width: 240px;
      top: auto;
      right: 0;
      bottom: calc(100% + 5px);
    }
  }
`;

export const QuestionIconStyled = styled(QuestionIcon)`
  * {
    stroke: ${(props) => (props.color ? props.color : '#807C77')};
  }
`;
