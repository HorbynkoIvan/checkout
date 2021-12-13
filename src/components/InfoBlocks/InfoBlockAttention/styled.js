import styled from 'styled-components/macro';

export const InfoBlockAttentionSC = styled.div`
  background: #ffffff;
  border: 1px solid #ff7f00;
  box-sizing: border-box;
  border-radius: 10px;
  color: #000000;
  font: 400 12px / 16px ${({ theme }) => theme.mainFont};
  padding: 8px;
`;
