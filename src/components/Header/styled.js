import styled from 'styled-components/macro';

export const HeaderSC = styled.div`
  background: #f5f4f1;
  margin-bottom: 16px;
  & > section {
    max-width: 960px;
    height: 100%;
    min-height: 70px;
    margin: 0 auto 0;
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div {
      display: flex;
      & > div {
        margin: -4px 0 0 4px;
      }
    }
  }
  @media (max-width: 1024px) {
    & > section {
      padding: 8px 16px;
    }
  }
  @media (max-width: 767px) {
    & > section {
      & > div {
        flex-direction: column-reverse;
        align-items: flex-end;
        & > div {
          margin-left: 0;
        }
      }
    }
  }
`;
