import styled from 'styled-components/macro';
import { device } from '../../assets/css/theme';

export const ScIsRegistered = styled.div`
  width: 100%;
  max-width: 552px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #e2dfd9;
  box-sizing: border-box;
  border-radius: 20px;
  & > span {
    font: 500 14px / 24px ${({ theme }) => theme.mainFont};
    color: #000000;
  }
  & > button {
    margin-left: 4px;
  }
  @media only screen and ${device.mobileSm} {
    flex-direction: column;
  }
`;
