import styled from 'styled-components/macro';
import { css } from 'styled-components';

export const TogetherCheaperSC = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #e2dfd9;
  box-sizing: border-box;
  border-radius: 20px;
  overflow: hidden;
  max-width: 552px;
  margin: 24px 0;

  ${({ isDisabledDeleteButton }) =>
    isDisabledDeleteButton
      ? css`
          .together-dlt {
            pointer-events: none;
          }
        `
      : null}
`;

export const TogetherCheaperTopSC = styled.div`
  background: #f5f4f1;
  border-bottom: 1px solid #e2dfd9;
  box-sizing: border-box;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  padding: 9px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    font: 700 16px / 24px ${({ theme }) => theme.mainFont};
    color: #ff7f00;
  }
  & > button {
    cursor: pointer;
    padding: 0;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 30px;
    width: 30px;
    & > svg {
      pointer-events: none;
    }
  }
`;

export const TogetherCheaperContentSC = styled.div`
  padding: 16px;
  & > svg {
    margin: 16px auto;
    display: block;
  }
`;

export const TogetherCheaperFooterSC = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e2dfd9;
  border-radius: 0 0 20px 20px;
  & > div {
    text-align: right;
  }
`;

export const ProductItem = styled.div`
  display: flex;
  & > a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    border: 1px solid #e2dfd9;
    border-radius: 10px;
    overflow: hidden;
    height: 80px;
    width: 80px;
    flex: 0 0 80px;
    & > img {
      max-height: 100%;
      max-width: 100%;
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    & > a {
      font: 500 14px / 24px ${({ theme }) => theme.mainFont};
      text-decoration: none;

      &:nth-child(1) {
        color: #000000;
      }
      &:nth-child(2) {
        font-weight: 400;
        color: #807c77;
        margin-bottom: 8px;
      }
    }
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > span {
        font: 700 14px / 24px ${({ theme }) => theme.mainFont};
        color: #000000;
      }
    }
  }
`;
