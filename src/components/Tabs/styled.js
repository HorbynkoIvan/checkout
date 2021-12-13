import styled from 'styled-components/macro';
import { device } from '../../assets/css/theme';

export const ScTabs = styled.div`
  border-bottom: 2px solid #e2dfd9;
  & > button {
    cursor: pointer;
    outline: none;
    border: none;
    border-bottom: 2px solid transparent;
    background: none;
    font: 400 14px / 24px ${({ theme }) => theme.mainFont};
    color: #807c77;
    margin: 0 0 -2px 24px;
    padding: 0;
    text-align: left;
    &:first-child {
      margin-left: 0;
    }

    &.is-active {
      border-bottom: 2px solid #e57200;
      font-weight: 700;
      color: #000000;
    }
  }
  @media only screen and ${device.mobile} {
    & > button {
      margin: 0 0 -2px 17px;
    }
  }
`;
