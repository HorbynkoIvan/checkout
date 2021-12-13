import styled from 'styled-components/macro';

export const SuccessBlockSC = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${({ error }) => (!error ? '#009e55' : '#EB3700')};
  box-sizing: border-box;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 16px;
  & > svg {
    display: flex;
    flex: 0 0 24px;
    margin-right: 8px;
  }
  & > div {
    font-size: 12px;
    line-height: 16px;
    span {
      font-weight: bold;
    }
  }
`;
