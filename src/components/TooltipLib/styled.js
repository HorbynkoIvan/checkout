import styled from 'styled-components';

export const TooltipLibSC = styled.div`
  position: relative;
  display: inline-flex;
  height: 20px;
  width: 20px;

  & > button {
    height: 100%;
    width: 100%;
    border: none;
    padding: 0;
    background: none;
    outline: none;
    cursor: pointer;

    & > svg {
      pointer-events: none;
      * {
        stroke: #807c77;
      }
    }
  }

  .__react_component_tooltip.show {
    opacity: 1 !important;
  }
`;

export const TooltipLibBlockSC = styled.div`
  max-width: 328px;
  padding: 16px;
  font: 400 14px / 24px ${({ theme }) => theme.mainFont};
  background-color: #ffffff;
  border: 1px solid #e2dfd9;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  color: #000000;
`;
