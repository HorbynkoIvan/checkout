import styled from 'styled-components/macro';
import { css } from 'styled-components';

export const ModalCallRequestSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    margin-bottom: 24px;
    color: #000;
    font: 400 14px / 16px ${({ theme }) => theme.mainFont};
  }
  & > section {
    width: 100%;
    max-width: 280px;
    position: relative;
    padding: 0 0 17px;
    margin-bottom: 15px;
    & > label {
      position: relative;
      display: inline-block;
      width: 100%;
      & > input {
        width: 100%;
        height: 40px;
        font: 400 14px / 24px ${({ theme }) => theme.mainFont};
        background: #ffffff;
        border: 1px solid #acaaa7;
        border-radius: 20px;
        padding: 0 30px 0 16px;
      }
      & > svg {
        display: none;
        pointer-events: none;
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        & * {
          fill: #eb3700;
        }
      }
    }
    & > span {
      position: absolute;
      bottom: 0;
      left: 0;
      color: #eb3700;
      font: 400 12px / 16px ${({ theme }) => theme.mainFont};
    }
  }
  & > button {
    outline: none;
    border-radius: 20px;
    text-align: center;
    color: #ffffff;
    background: #ff7f00;
    font: 700 16px / 24px ${({ theme }) => theme.mainFont};
    padding: 8px 42px;
  }
  ${({ error }) => {
    if (error) {
      return css`
        & > div {
          & > label {
            & > input {
              border: 1px solid #eb3700;
            }
            & > svg {
              display: inline-block;
            }
          }
        }
      `;
    }
  }}
`;
