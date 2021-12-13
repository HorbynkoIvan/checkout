import styled from 'styled-components';

export const UserDataSC = styled.div`
  width: 100%;
  .title_block {
    margin-bottom: 8px;
  }
`;

export const RowSC = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const PhoneInfoSC = styled.div`
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  .link {
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
  }
`;

export const EmailInfoSC = styled.div`
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  color: #807c77;
`;
