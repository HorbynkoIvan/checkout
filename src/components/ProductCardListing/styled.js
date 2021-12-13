import styled from 'styled-components/macro';
import { device } from '../../assets/css/theme';

export const ProductCardListingSC = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    &:last-child {
      margin-top: 40px;
    }
  }
`;
export const ProductCardListingItemSC = styled.div`
  width: 25%;
  height: 420px;
  background: #fff;
  color: #000;
  border-radius: 15px;
  padding: 20px 10px 15px;
  display: flex;
  flex-direction: column;
  &:hover {
    z-index: 50;
    box-shadow: 0 4px 21px 0 rgb(169 147 220 / 67%);
    transition: box-shadow 300ms ease-in-out;
    & > div {
      &:nth-child(2) {
        & > a {
          color: #0066dc;
        }
        & > section {
          &:last-child {
            & > button {
              display: inline-block;
            }
          }
        }
      }
    }
  }
  @media only screen and ${device.tablet} {
    width: 50%;
    & > div {
      &:nth-child(2) {
        & > section {
          &:last-child {
            & > button {
              display: inline-block;
            }
          }
        }
      }
    }
  }

  @media only screen and ${device.mobile} {
    width: 50%;
    & > div {
      &:nth-child(2) {
        & > section {
          &:last-child {
            & > button {
              display: inline-block;
            }
          }
        }
      }
    }
  }
`;

export const ProductCardListingHeaderSC = styled.div`
  height: 130px;
  width: 100%;
  & > a {
    position: relative;
    display: inline-flex;
    width: 100%;
    height: 100%;
    & > img {
      display: block;
      max-height: 100%;
      max-width: 100%;
      height: auto;
      width: auto;
      margin: auto;
    }
    & > span {
      position: absolute;
      right: 0;
      top: 10px;
      background-color: #ff3c00;
      height: 24px;
      padding: 0 6px;
      text-align: center;
      font: 400 12px / 24px ${({ theme }) => theme.mainFont};
      color: #fff;
      border-radius: 12px;
    }
  }
`;

export const ProductCardListingContentSC = styled.div`
  margin-top: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  & > a {
    color: #000;
    font: 400 12px / 14px ${({ theme }) => theme.mainFont};
    text-decoration: none;
  }
  & > section {
    &:nth-child(2) {
      margin-top: 10px;
      display: flex;
      align-items: center;
      & > div > svg {
        height: 10px;
        width: 10px;
        margin-right: 2px;
      }
      & > a {
        margin-left: 5px;
        font-size: 11px;
        color: #0066dc;
        text-decoration: underline;
        & > span {
          border-bottom: 0;
        }
      }
    }

    &:last-child {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      & > button {
        width: 100%;
        background: #ff881a;
        display: none;
      }
    }
  }
  & > div {
    margin-top: 8px;
    flex-direction: column;
    & > p {
      font: 400 12px / 14px ${({ theme }) => theme.mainFont};
      margin-bottom: 8px;
    }
    & > div {
      width: 100%;
    }
  }
`;
