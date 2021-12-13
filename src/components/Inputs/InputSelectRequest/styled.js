import styled from 'styled-components/macro';

export const ScInputSelectRequest = styled.div`
  position: relative;
  max-width: 336px;
  width: 100%;
  & > div {
    cursor: pointer;
    position: relative;
    background: #ffffff;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    font: 400 14px / 21px ${({ theme }) => theme.mainFont};
    color: #000000;
    padding: 9px 40px 9px 16px;
    & > svg {
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
    }
  }
  & > section {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    left: 0;
    & > label {
      width: 100%;
      display: inline-block;
      margin-bottom: 10px;
      & > input {
        box-sizing: border-box;
        outline: none;
        width: 100%;
        font: 400 14px / 21px ${({ theme }) => theme.mainFont};
        color: #000000;
        padding: 9px 16px;
        border: 1px solid #c4c4c4;
        border-radius: 10px;
      }
    }
    & > div {
      & > div {
        cursor: pointer;
        font: 400 14px / 21px ${({ theme }) => theme.mainFont};
        color: #000000;
        border-bottom: 1px solid #c4c4c4;
        padding-bottom: 10px;
        margin-bottom: 10px;
        &:hover {
          background: lightgrey;
        }
      }
    }
  }
`;
