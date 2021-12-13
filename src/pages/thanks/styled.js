import styled from 'styled-components';
import { device } from '../../theme/theme';

export const ThankYouPageSC = styled.div`
  margin: 40px auto;
  .thank_info {
    margin-bottom: 16px;
    .label {
      position: absolute;
      top: 0;
      left: 0;
      height: 64px;
      width: 64px;
    }
    .title_sub {
      margin-top: -8px;
      margin-left: 56px;
      margin-bottom: 25px;
    }
    .text {
      font-size: 14px;
      line-height: 24px;
      margin: 25px 0 10px;
    }
  }
  .social_info {
    .text {
      font-size: 14px;
      line-height: 24px;
      margin: 4px 0 16px;
    }
    .social_btn {
      &:not(:last-child) {
        margin-right: 16px;
      }
    }
  }

  @media only screen and ${device.tablet} {
  }

  @media only screen and ${device.mobile} {
    margin: 0 auto 24px;
    max-width: 328px;
  }
`;

export const ImgBlockSC = styled.div`
  width: 288px;
  height: 288px;
  background: #c4c4c4;
  border-radius: 50%;
  margin: 24px auto 8px;
`;

export const TitleSC = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #ff7f00;
  margin-bottom: 32px;
`;

export const RowSC = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 736px;
  margin: 0 auto;
  @media only screen and ${device.mobile} {
    flex-direction: column;
  }
`;
