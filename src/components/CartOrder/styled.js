import styled from 'styled-components/macro';
import { device } from '../../theme/theme';

export const CartOrderStyled = styled.div`
  max-width: 376px;
  border: 1px solid #e2dfd9;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 24px;

  .use_coupon {
    margin-bottom: 16px;
  }

  .total_block {
    margin-top: 24px;
  }

  .btn {
    width: 100%;
    height: 40px;
    background: #ff7f00;
  }
  @media only screen and ${device.mobile} {
    border: none;
    padding: 0 0 24px;
  }
`;
export const CartOrderEnterBlockSC = styled.div`
  font-size: 12px;
  line-height: 16px;
  padding: 7px 16px;
  & > button {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
`;
export const CartOrderPampiksBlockSC = styled.div`
  font-size: 12px;
  line-height: 16px;
  padding: 7px 16px;
  & > span {
    color: #693bff;
    font-size: 12px;
    line-height: 16px;
    & > span {
      font-weight: 800;
    }
  }
`;
export const CartOrderTooltipBlockSC = styled.div`
  margin: 8px 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  & > span {
    margin-right: 4px;
    line-height: 24px;
    & > span {
      color: #693bff;
    }
  }
  @media only screen and ${device.mobile} {
    .tooltip {
      min-width: 328px;
      right: -16px;
    }
  }
`;
