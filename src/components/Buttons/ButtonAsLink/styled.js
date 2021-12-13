import styled from 'styled-components/macro';

export const ScButtonAsLink = styled.button`
  position: relative;
  cursor: pointer;
  font: 500 14px / 24px ${({ theme }) => theme.mainFont};
  color: #e57200;
  border: none;
  padding: 0;
  background: transparent;
  outline: none;
  display: inline-flex;
  align-items: center;
  & > span {
    border-bottom: 1px dashed #e57200;
  }
  & > *:nth-child(2) {
    margin-left: 4px;
  }
`;
