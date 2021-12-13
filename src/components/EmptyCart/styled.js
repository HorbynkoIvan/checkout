import styled from 'styled-components/macro';

export const EmptyCartSC = styled.div`
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > svg {
    height: 128px;
    width: 128px;
    margin-bottom: 16px;
  }
  & > p {
    font: 700 16px / 24px ${({ theme }) => theme.mainFont};
    color: #000000;
    margin-bottom: 24px;
  }
  & > a {
    outline: none;
    border-radius: 20px;
    text-align: center;
    color: #ffffff;
    background: #ff7f00;
    font: 700 16px / 24px ${({ theme }) => theme.mainFont};
    padding: 8px 42px;
  }
`;
