import styled from 'styled-components/macro';
import { device } from '../../theme/theme';

export const CheckoutPageSC = styled.div`
  max-width: 736px;
  margin: 0 auto;
  padding: 40px 0;

  .title_block {
    margin-bottom: 16px;
    span {
      font-weight: 400;
    }
  }
  .comment_link {
    margin-bottom: 24px;
  }
  .comment {
    margin-bottom: 24px;
  }

  @media only screen and ${device.tablet} {
    max-width: 704px;
  }

  @media only screen and ${device.mobile} {
    max-width: 328px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const CheckoutLeftSC = styled.div`
  max-width: 328px;
  width: 100%;

  @media only screen and ${device.mobile} {
    max-width: 100%;
  }
`;

export const RowSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and ${device.mobile} {
    flex-direction: column;
  }
`;

export const RowTitleSC = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const HrSC = styled.div`
  width: 100%;
  height: 1px;
  background: #e2dfd9;
  margin: 24px 0;
`;

export const InputErrorSC = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #eb3700;
  margin-top: 4px;
`;
