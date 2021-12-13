import styled from 'styled-components/macro';

export const ScInputTextarea = styled.label`
  display: inline-flex;
  flex-direction: column;
  & > span {
    font: 400 12px / 18px ${({ theme }) => theme.mainFont};
  }
  & > textarea {
    resize: none;
    outline: none;
    padding: 8px 16px;
    font: 400 14px / 21px ${({ theme }) => theme.mainFont};
    background: #ffffff;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    min-height: 80px;
  }
`;
