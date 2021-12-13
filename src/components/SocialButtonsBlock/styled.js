import styled from 'styled-components';
import { device } from '../../assets/css/theme';

export const SocialButtonsBlockStyled = styled.div`
  width: 296px;
  background: #f0f0f0;
  border: 1px solid #e2dfd9;
  border-radius: 20px;
  padding: 16px;
  box-sizing: border-box;

  p {
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 8px;
    text-align: left;
  }
  @media only screen and ${device.mobile} {
    width: 100%;
  }
`;

export const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .social_btn:not(:last-child) {
    margin-bottom: 16px;
  }
`;
