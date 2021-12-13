import styled from 'styled-components/macro';

export const ScRatingStar = styled.div`
  display: inline-flex;
  align-items: center;
  & > svg {
    margin-right: 4px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
