import styled from 'styled-components/macro';
import { css } from 'styled-components';

import { ReactComponent as ArrowIcon } from '../../assets/img/chevron-right.svg';

export const PaginationCustomSC = styled.div`
  display: flex;
  align-items: center;
  & > button {
    background: #ffffff;
    border: 1px solid #dcd9d2;
    color: #807c77;
    margin-right: 17px;
  }
  & > div {
    display: flex;
    align-items: center;
    & > button {
      margin: 0 4px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const PaginationCustomButtonSC = styled.button`
  cursor: pointer;
  outline: none;
  background: #ffffff;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  font: 700 14px / 24px ${({ theme }) => theme.mainFont};
  font-feature-settings: 'pnum' on, 'lnum' on;
  ${({ isActive, dots }) => {
    if (isActive) {
      return css`
        border: 1px solid #ff7f00;
        color: #ff7f00;
      `;
    }
    if (dots) {
      return css`
        cursor: auto;
        border: 1px solid transparent !important;
        color: #807c77 !important;
        width: 20px;
        align-items: flex-end;
      `;
    }
    return css`
      border: 1px solid #dcd9d2;
      color: #807c77;
    `;
  }}
  &:hover {
    border: 1px solid #ff7f00;
    color: #ff7f00;
    & > svg * {
      fill: #ff7f00;
    }
  }
`;
export const PaginationCustomChevronLeftSC = styled(ArrowIcon)`
  transform: rotateZ(180deg);
`;
