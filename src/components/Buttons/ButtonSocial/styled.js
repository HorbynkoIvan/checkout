import styled from 'styled-components';
import { device } from '../../../theme/theme';

export const ButtonSocialStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;

  background: #ffffff;
  border: 1px solid #dcd9d2;
  border-radius: 20px;
  width: 264px;
  height: 40px;
  span {
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #807c77;
    margin-left: 8px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.lighterBlack};
  }

  @media only screen and ${device.mobile} {
    width: 100%;
    max-width: 264px;
  }
`;
