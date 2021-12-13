import styled from 'styled-components';
import { device } from '../../theme/theme';

export const FinishBlockSC = styled.div`
  border: 1px solid #e2dfd9;
  border-radius: 20px;
  max-width: 376px;
  text-align: left;
  color: #000000;
  box-sizing: border-box;
  padding: 24px;
  align-self: flex-start;
  .finish_info {
    margin-bottom: 24px;
    .info_text {
      font-size: 14px;
      line-height: 24px;
      margin-top: 8px;
    }
  }
  .title_sub {
    margin-bottom: 8px;
  }
  .btn {
    width: 100%;
    height: 40px;
  }

  @media only screen and ${device.mobile} {
    padding: 0;
    border: 0;
    margin-bottom: 24px;

    .finish_info {
      margin: 0 auto 24px;
    }
  }
`;

export const TextBlockSC = styled.div`
  padding: 16px 0;
  p {
    font-size: 14px;
    line-height: 21px;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;
