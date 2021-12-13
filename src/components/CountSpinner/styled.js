import styled from 'styled-components/macro';
import { device } from '../../assets/css/theme';

export const ScCountSpinner = styled.div`
  width: 84px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  & > button {
    position: absolute;
    top: 0;
    cursor: pointer;
    outline: none;
    width: 24px;
    height: 24px;
    background: #ffffff;
    border: 1px solid #dcd9d2;
    border-radius: 100%;
    padding: 0;
    &:hover {
      border: 1px solid #ff7f00;
      & > svg > path {
        fill: #ff7f00;
      }
    }
    &:nth-child(1) {
      left: 0;
    }
    &:nth-child(3) {
      right: 0;
    }
    & > svg {
      pointer-events: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      & > path {
        fill: #c4c4c4;
      }
    }
    &.is-disabled {
      pointer-events: none;
      border: 1px solid #e2dfd9;
      &:hover {
        border: 1px solid #e2dfd9;
      }
      & > svg {
        & > path {
          fill: #dcd9d2;
        }
      }
    }
  }
  & > span {
    font: 400 14px / 24px ${({ theme }) => theme.mainFont};
    color: #000000;
  }
  @media only screen and ${device.tablet} {
    width: 102px;
    height: 36px;
    & > button {
      height: 36px;
      width: 36px;
    }
  }
`;
