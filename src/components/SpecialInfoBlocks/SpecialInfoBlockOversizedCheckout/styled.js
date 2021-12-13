import styled from 'styled-components/macro';

export const SpecialInfoBlockOversizedCheckoutSC = styled.div`
  background: #ffffff;
  border: 1px solid #ff7f00;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 16px;
  display: flex;
  margin-bottom: 16px;
  & > svg {
    flex: 0 0 16px;
    margin-right: 8px;
  }
  & > span {
    color: #000000;
    font: 600 12px / 16px ${({ theme }) => theme.mainFont};
  }
`;
