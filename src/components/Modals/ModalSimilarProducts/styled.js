import styled from 'styled-components/macro';
import { device } from '../../../assets/css/theme';

export const ScModalSimilarProductsItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #f5f4f1;
  margin-top: 16px;
  &:first-child {
    margin-top: 0;
  }
  & > section {
    &:nth-child(1) {
      max-width: 540px;
      padding-right: 10px;
      display: flex;
      & > a {
        height: 128px;
        width: 128px;
        margin-right: 8px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 128px;
        & > img {
          max-height: 100%;
          max-width: 100%;
        }
      }
    }
  }
  @media only screen and ${device.tablet} {
    flex-direction: column;
  }
  @media only screen and ${device.mobile} {
    flex-direction: column;
  }
`;

export const ScModalSimilarProductsItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  & > a {
    &:nth-child(1) {
      font: 500 14px / 24px ${({ theme }) => theme.mainFont};
      color: #000000;
      text-decoration: none;
    }
    &:nth-child(2) {
      font: 500 14px / 24px ${({ theme }) => theme.mainFont};
      color: #807c77;
      text-decoration: none;
    }
  }
  & > div {
    &:nth-child(4) {
      max-width: 110px;
    }
  }
`;

export const ScModalSimilarProductsRatingBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 11px;
  & > div {
    margin-right: 8px;
  }
  & > a {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const ScModalSimilarProductsRatingBlockTablet = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  & > div {
    margin-right: 8px;
  }
`;

export const ScModalSimilarProductsTotalBlock = styled.div`
  min-width: 90px;
  text-align: right;
  & > button {
    width: 90px;
    background: #ff7f00;
    padding: 6px;
  }

  @media only screen and ${device.tablet} {
    margin-top: 16px;
    & > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      & > div {
        &:last-child {
          margin-left: auto;
        }
      }
    }
    & > button {
      width: 100%;
    }
  }

  @media only screen and ${device.mobile} {
    margin-top: 16px;
    & > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      & > div {
        &:last-child {
          margin-left: auto;
        }
      }
    }
    & > button {
      width: 100%;
    }
  }
`;
