import styled from 'styled-components/macro';
import { device } from '../../theme/theme';

export const PaginationSC = styled.div`
  display: flex;
  align-items: center;
  & > button {
    background: #ffffff;
    border: 1px solid #dcd9d2;
    color: #807c77;
    margin-right: 17px;
    &:hover {
      border: 1px solid #ff7f00;
      color: #ff7f00;
    }
  }
  & > ul {
    display: flex;
    align-items: center;
    &.btn-selected {
      & > li {
        &.selected {
          border: 1px solid #ff7f00;
          color: #ff7f00;
        }
      }
    }
    &.show-more-selected {
      & > li:not(.previous) {
        border: 1px solid #ff7f00;
        color: #ff7f00;
        &.break {
          color: #ff7f00 !important;
        }
        &.selected ~ li {
          border: 1px solid #dcd9d2;
          color: #807c77;
          &.break {
            color: #807c77 !important;
          }
        }
      }
    }
    & > li {
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
      border: 1px solid #dcd9d2;
      color: #807c77;
      margin: 0 4px;
      &:hover {
        border: 1px solid #ff7f00;
        color: #ff7f00;
        & > a > svg * {
          fill: #ff7f00;
        }
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      & > a {
        outline: none;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 100%;
        & > svg {
          pointer-events: none;
        }
      }
      &.previous {
        & > a {
          & > svg {
            transform: rotateZ(180deg);
          }
        }
      }
      &.next.disabled,
      &.previous.disabled {
        display: none;
      }

      &.break {
        cursor: auto;
        border: 1px solid transparent !important;
        color: #807c77 !important;
        width: 20px;
        align-items: flex-end;
      }
    }
  }

  @media only screen and ${device.tablet} {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    & > button {
      margin-bottom: 20px;
    }
  }

  @media only screen and ${device.mobile} {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    & > button {
      margin-bottom: 20px;
    }
  }
`;
