import styled from 'styled-components/macro';

export const ScInputSelect = styled.div`
  & > section {
    position: relative;
    width: 100%;
    max-width: 330px;
    & > div {
      cursor: pointer;
      outline: none;
      user-select: none;
      font: 400 14px / 21px ${({ theme }) => theme.mainFont};
      color: #000000;

      &:nth-child(1) {
        position: relative;
        background: #ffffff;
        border: 1px solid #c4c4c4;
        border-radius: 10px;
        padding: 9px 40px 9px 16px;
        & > svg {
          position: absolute;
          top: 50%;
          right: 16px;
          transform: translateY(-50%);
        }
      }
      &:nth-child(2) {
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        & > p {
          cursor: pointer;
          outline: none;
        }
      }
    }
  }
`;
