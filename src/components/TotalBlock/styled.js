import styled from 'styled-components/macro';

export const ScTotalBlock = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 328px;
  padding: 16px;
  background: linear-gradient(0deg, #f5f4f1, #f5f4f1),
    linear-gradient(0deg, #f0f0f0, #f0f0f0);
  border-radius: 20px;
  box-sizing: border-box;
`;

export const RowStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 8px;
  & > span {
    &:nth-child(2) {
      white-space: nowrap;
    }
  }
`;

export const RowBoldStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
`;

export const HrStyled = styled.div`
  width: 100%;
  height: 1px;
  background: #e2dfd9;
  margin: 16px 0 8px;
`;
