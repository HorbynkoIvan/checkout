import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { device } from '../../assets/css/theme';

export const ScProductCard = styled.div`
  & > div {
    position: relative;
    max-width: 552px;
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
    & > div {
      margin-bottom: 8px;
    }
    & > section {
      padding-bottom: 24px;
      border-bottom: 1px solid #f5f4f1;
    }
  }
`;

export const ProductCardItemSC = styled.div`
  & > div {
    display: flex;
    & > a {
      position: relative;
      margin-right: 8px;
      display: inline-block;
      height: 80px;
      width: 80px;
      flex: 0 0 80px;
      border-radius: 10px;
      border: 1px solid #e2dfd9;
      overflow: hidden;
      & > div {
        position: absolute;
        top: -1px;
        left: -1px;
      }
      & > img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
        object-fit: contain;
      }
    }
    & > section {
      width: 100%;
      & > div {
        &:nth-child(1) {
          margin-bottom: 8px;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  @media only screen and ${device.tablet} {
    & > div {
      & > section {
        display: flex;
        flex-direction: column-reverse;
      }
    }
  }
  ${({ isPreordered }) => {
    if (isPreordered) {
      return css`
        border: 1px solid #ff7f00;
        box-sizing: border-box;
        border-radius: 20px;
        padding: 8px;
      `;
    }
    return null;
  }}
`;

export const ProductCardItemContentSC = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-right: 46px;

  @media only screen and ${device.tablet} {
    flex-direction: column;
    padding-right: 0;
    & > div {
      margin-top: 8px;
      &:first-child {
        margin-top: 0;
      }
    }
  }

  @media only screen and ${device.mobile} {
    flex-direction: column;
    padding-right: 0;
    & > div {
      margin-top: 8px;
      &:first-child {
        margin-top: 0;
      }
    }
  }

  ${({ buyAgain }) => {
    if (buyAgain) {
      return css`
        padding-right: 0;
      `;
    }
  }}
`;

export const ProductCardItemContentDeleteControlSC = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  & > button {
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: inherit;
    border: 0;
    & > svg {
      pointer-events: none;
    }
  }
  & > section {
    min-width: 260px;
    position: absolute;
    top: 0;
    right: 40px;
    background: #ffffff;
    border: 1px solid #e2dfd9;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    & > button {
      display: flex;
      align-items: center;
      font: 500 12px / 16px ${({ theme }) => theme.mainFont};
      color: #807c77;
      & > span {
        border-bottom: 1px dashed #807c77;
      }
    }
  }
  ${({ isDisabledDeleteButton }) =>
    isDisabledDeleteButton
      ? css`
          & > button {
            pointer-events: none;
          }
        `
      : null}
`;

export const ProductCardItemContentDescriptionSC = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    width: 207px;
    padding-right: 7px;
    flex-direction: column;
    & > a {
      font: 500 14px / 24px ${({ theme }) => theme.mainFont};
      color: #000000;
      text-decoration: none;
      display: inline-flex;
      flex-direction: column;
      & > span {
        &:nth-child(2) {
          font: 400 14px / 24px ${({ theme }) => theme.mainFont};
          color: #807c77;
        }
      }
    }

    & > div {
      font: 400 12px / 24px ${({ theme }) => theme.mainFont};
      color: #000000;
    }
  }
  & > span {
    margin-top: 8px;
    font: 500 12px / 26px ${({ theme }) => theme.mainFont};
    color: #000000;
  }

  @media only screen and ${device.mobile} {
    & > div {
      width: 160px;
      padding-right: 0;
      & > span {
        line-height: 20px;
      }
    }
  }
`;
export const ProductCardItemContentTotalSC = styled.div`
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 207px);
  & > div {
    &:nth-child(1) {
      display: flex;
      align-items: flex-start;
      & > div {
        &:nth-child(2) {
          margin-left: 16px;
        }
      }
    }
    &:nth-child(2) {
      margin-left: 8px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media only screen and ${device.tablet} {
    width: 100%;
    justify-content: space-between;
  }
  @media only screen and ${device.mobile} {
    width: 100%;
    justify-content: space-between;
    & > div {
      &:nth-child(2) {
        & > span {
          display: inline-block;
          text-align: right;
        }
      }
    }
  }

  ${({ buyAgain }) => {
    if (buyAgain) {
      return css`
        & > div {
          flex-direction: column;
          align-items: flex-end !important;
          & > div {
            &:nth-child(1) {
              margin-bottom: 8px;
            }
          }
          & > button {
            background: #ff7f00;
          }
        }
        @media only screen and ${device.tablet} {
          & > div {
            align-items: flex-start !important;
          }
        }
        @media only screen and ${device.mobile} {
          & > div {
            align-items: flex-start !important;
          }
        }
      `;
    }
    return null;
  }}
`;

export const ProductCardItemGiftSC = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #e2dfd9;
  border-radius: 20px;
  padding: 16px 54px 16px 16px;
  margin-top: 12px;
  display: flex;
  //&:before,
  //&:after {
  //  content: '';
  //  position: absolute;
  //  bottom: 100%;
  //  width: 0;
  //  height: 0;
  //  border-style: solid;
  //}
  //&:before {
  //  z-index: 2;
  //  left: 27px;
  //  border-width: 0 9px 9px 9px;
  //  border-color: transparent transparent #ffffff transparent;
  //}
  //&:after {
  //  z-index: 1;
  //  left: 25px;
  //  border-width: 0 11px 11px 11px;
  //  border-color: transparent transparent #e2dfd9 transparent;
  //}

  .card-gift {
    &__wrapper {
      padding-right: 0;
    }
    &__delete {
      top: 16px;
      right: 16px;
    }
    &__block {
      & > div {
        width: 100%;

        & > p {
          &:last-child {
            color: #000000;
            font: 700 14px / 24px ${({ theme }) => theme.mainFont};
          }
        }
      }
    }
  }
  @media only screen and ${device.mobile} {
    padding: 16px 52px 16px 16px;
  }
`;

export const ProductCardItemGiftImgBlockSC = styled.button`
  position: relative;
  margin-right: 8px;
  display: inline-block;
  height: 80px;
  width: 80px;
  flex: 0 0 80px;
  border-radius: 10px;
  border: 1px solid #e2dfd9;
  overflow: hidden;
  & > div {
    position: absolute;
    top: -1px;
    left: -1px;
  }
  & > img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: contain;
  }
`;

export const ProductCardItemErrorSC = styled.div`
  color: #000000;
  font: 400 12px / 16px ${({ theme }) => theme.mainFont};
  background: #fdebe5;
  border-radius: 10px;
  padding: 8px 12px;
`;

export const ProductCardItemPreorderSC = styled.div`
  background: #ffe6ce;
  border-radius: 15px 15px 0 0;
  padding: 8px;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  & > span {
    color: #807c77;
    font: 400 12px / 16px ${({ theme }) => theme.mainFont};

    & > span {
      position: relative;
      padding-left: 16px;
      font-weight: 700;
      margin-right: 8px;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 3px;
        background: #ff7f00;
        border-radius: 100%;
        height: 8px;
        width: 8px;
      }
    }
  }
  @media only screen and ${device.tablet} {
    & > span {
      display: inline-flex;
      flex-direction: column;
      align-items: center;

      & > span {
        margin: 0 0 4px;
      }
    }
  }
  @media only screen and ${device.mobile} {
    & > span {
      display: inline-flex;
      flex-direction: column;
      align-items: center;

      & > span {
        margin: 0 0 4px;
      }
    }
  }
`;
