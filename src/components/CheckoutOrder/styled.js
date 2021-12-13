import styled from 'styled-components/macro';
import { device } from '../../assets/css/theme';

export const CheckoutOrderStyled = styled.div`
  max-width: 376px;
  border: 1px solid #e2dfd9;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 24px;
  .link {
    color: #807c77;
    span {
      border-bottom: 1px dashed #807c77;
    }
  }

  .user_agreement {
    text-align: center;
    margin-top: 16px;
    .link,
    p {
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 6px;
    }
  }

  .total_block {
    margin-top: 24px;
  }
  .btn {
    max-width: 328px;
    width: 100%;
    height: 40px;
    background: #ff7f00;
    margin: 16px auto 0;

    display: flex;
    align-items: center;
    justify-content: center;
    .smile {
      margin-left: 10px;
      //font-size: 24px;
    }
  }
  @media only screen and ${device.tablet} {
    padding: 10px 8px 16px 8px;
  }
  @media only screen and ${device.mobile} {
    max-width: 328px;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    border: none;
  }
`;

export const RowTitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const CheckoutOrderCallMeWrapperSC = styled.div`
  margin-top: 24px;
`;
