import styled from 'styled-components/macro';

export const ScLink = styled.button`
  cursor: pointer;
  outline: none;
  border: 0;
  padding: 0;
  background: none;
  font: 500 12px / 16px ${({ theme }) => theme.mainFont};
  color: #807c77;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  & > span {
    border-bottom: 1px dashed #c4c4c4;
    &:nth-child(2) {
      margin-left: 4px;
    }
  }
`;
