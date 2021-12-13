import styled from 'styled-components/macro';
import { css } from 'styled-components';

export const ModalAddToWishListSC = styled.div`
  display: flex;
  flex-direction: column;
  & > section {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > div {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    & > p {
      font: 400 12px / 16px ${({ theme }) => theme.mainFont};
      color: #eb3700;
      padding-left: 20px;
    }
  }
  & > button {
    background: #ff7f00;
    align-self: center;
    height: 40px;
    padding: 0 25px;
  }
`;

export const ModalAddToWishListItemSC = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font: 400 14px / 18px ${({ theme }) => theme.mainFont};
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 10px;
    width: 10px;
    border-radius: 100%;
    border: 2px solid #d9d9d9;
    background: #ffffff;
  }
  & > label {
    display: inline-block;
    #wishlist-input {
      min-width: 280px;
      width: 100%;
      //height: 40px;
      //padding: 0 10px;
      font: 400 14px / 18px ${({ theme }) => theme.mainFont};
      //outline: none;
      //background: #ffffff;
      //border-radius: 20px;
    }
  }
  ${({ isActive }) => {
    if (isActive) {
      return (
        isActive &&
        css`
          &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            height: 10px;
            width: 10px;
            border-radius: 100%;
            border: 2px solid #ff7f00;
            background: #ffffff;
          }
        `
      );
    }
  }}
`;
