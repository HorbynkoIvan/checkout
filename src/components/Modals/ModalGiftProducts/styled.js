import styled from 'styled-components/macro';

import { css } from 'styled-components';
import { ReactComponent as CheckboxArrowIcon } from '../../assets/img/checkbox-arrow.svg';

export const ModalGiftProductsItemSC = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  padding-right: 60px;
  border-bottom: 1px solid #f5f4f1;
  margin-top: 16px;

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    border-bottom: 1px solid transparent;
  }
  & > section {
    max-width: 540px;
    padding-right: 10px;
    display: flex;
    & > a {
      height: 80px;
      width: 80px;
      margin-right: 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 80px;
      border: 1px solid #e2dfd9;
      border-radius: 10px;
      & > img {
        max-height: 100%;
        max-width: 100%;
      }
    }
  }
`;

export const ModalGiftProductsItemDescriptionSC = styled.div`
  display: flex;
  flex-direction: column;
  & > a {
    &:nth-child(1) {
      font: 500 14px / 24px ${({ theme }) => theme.mainFont};
      color: #000000;
      text-decoration: none;
      ${({ $isActive }) =>
        $isActive &&
        css`
          font-weight: 700;
        `}
    }
    &:nth-child(2) {
      font: 500 14px / 24px ${({ theme }) => theme.mainFont};
      color: #807c77;
      text-decoration: none;
    }
  }
`;

export const ModalGiftProductsFooterSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    font: 400 14px / 24px ${({ theme }) => theme.mainFont};
    color: #807c77;
  }
  & > button {
    background: #ffffff;
    border: 1px solid #dcd9d2;
    color: #807c77;
  }
`;

export const ModalGiftProductsCheckboxIconSC = styled(CheckboxArrowIcon)`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 0;
  * {
    pointer-events: none;
    ${({ $isActive }) =>
      $isActive &&
      css`
        fill: #ff7f00;
      `}
  }
`;
