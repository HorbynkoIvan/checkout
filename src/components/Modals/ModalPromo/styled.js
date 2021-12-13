import styled from 'styled-components/macro';

export const ModalPromoSC = styled.div`
  color: #000000;
  font: 400 14px / 24px ${({ theme }) => theme.mainFont};
  & > div {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #f5f4f1;
    &:last-child {
      border-bottom: 1px solid transparent;
    }
    & > h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
`;
