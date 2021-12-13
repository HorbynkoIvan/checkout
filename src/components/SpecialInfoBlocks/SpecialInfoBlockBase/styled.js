import styled from 'styled-components/macro';
import { css } from 'styled-components';

export const SpecialInfoBlockBaseSC = styled.div`
  border: 1px solid #e2dfd9;
  background: #ffffff;
  width: 100%;
  min-height: 64px;
  border-radius: 20px;
  font: 400 14px / 24px ${({ theme }) => theme.mainFont};
  max-width: 552px;
`;

export const ScSpecialInfoTop = styled.div`
  position: relative;
  padding: 8px 38px 8px 56px;

  ${({ small }) =>
    small &&
    css`
      padding: 8px 8px 8px 40px;
    `}

  ${({ simpleBlock }) =>
    simpleBlock &&
    css`
      padding: 8px 8px 8px 56px;
      p {
        line-height: 21px;
      }
    `}
  .link {
    margin-top: 10px;
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.orange};
    span {
      border-bottom: 1px dashed ${({ theme }) => theme.orange};
    }
  }
  & > div {
    &:nth-child(1) {
      position: absolute;
      top: -1px;
      left: -1px;
    }
    &:nth-child(3) {
      & > div {
        & > a {
          font: 500 14px / 24px ${({ theme }) => theme.mainFont};
          color: #e57200;
          border-bottom: 1px dashed #e57200;
        }
        & > button {
          flex-direction: row-reverse;
          & > span {
            margin-left: 0;
            margin-right: 4px;
          }
          & > svg * {
            fill: #e57200;
          }
        }
        & > p {
          & > button {
            color: #807c77;
            & > span {
              border-bottom: 1px dashed #c4c4c4;
            }
          }
        }
      }
    }
  }
  & > button {
    cursor: pointer;
    position: absolute;
    top: 2px;
    right: 2px;
    border-radius: 0 10px 0 0;
    height: 30px;
    width: 30px;
    padding: 0;
    border: 0;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    & > svg {
      pointer-events: none;
    }
  }
  b {
    font-weight: 600;
  }
`;
