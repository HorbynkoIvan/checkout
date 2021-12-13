import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { device } from '../../theme/theme';

export const CartSC = styled.div`
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  .together-cheaper {
    margin-bottom: 24px;
  }

  @media only screen and ${device.tablet} {
    max-width: 704px;
  }
  @media only screen and ${device.mobile} {
    max-width: 328px;
  }
`;

export const CartTopSC = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  & > button {
    font: 500 12px / 16px ${({ theme }) => theme.mainFont};
    color: #807c77;
    & > span {
      border-bottom: 1px dashed #c4c4c4;
    }
  }
  @media only screen and ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 32px;
  }
`;

export const CartContentSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and ${device.mobile} {
    flex-direction: column;
  }
`;

export const CartOrderSC = styled.div`
  max-width: 552px;
  width: 100%;
  .order {
    &__title {
      font: 400 18px / 28px ${({ theme }) => theme.mainFont};
      color: #000000;
      margin-bottom: 16px;
      & > b {
        font-weight: 700;
      }
    }
    &__tabs {
      margin-bottom: 24px;
    }
    &__list {
      margin-bottom: 24px;
    }
    .share-cart {
      margin-bottom: 32px;
    }
  }
  @media only screen and ${device.tablet} {
    max-width: 328px;
  }
  @media only screen and ${device.mobile} {
    max-width: 328px;
  }
  @media only screen and ${device.mobileSm} {
    max-width: 290px;
  }
  ${({ isEmptyCart }) =>
    isEmptyCart &&
    css`
      max-width: 100%;
      width: 100%;
    `}
`;

export const CartIsRegisteredBlockSC = styled.div`
  margin-bottom: 8px;
`;

export const CartInfoBlockSC = styled.div`
  margin-bottom: 16px;
  & > div {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const CartTotalBlockSC = styled.div`
  max-width: 376px;
  width: 100%;
  @media only screen and ${device.tablet} {
    max-width: 344px;
  }

  @media only screen and ${device.mobile} {
    margin-top: 24px;
  }
`;
