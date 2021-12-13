import styled from 'styled-components/macro';
import { css } from 'styled-components';

export const ScProductCardBlockInform = styled.div`
  font: 700 12px / 16px ${({ theme }) => theme.mainFont};
  color: #807c77;
  border-radius: 5px;
  min-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ option }) => {
    if (option === 'priceUp') {
      return css`
        background: rgba(255, 127, 0, 0.1);
        color: #e57200;
        & > svg {
          transform: rotateZ(180deg);
          & > * {
            fill: #e57200;
          }
        }
      `;
    }

    if (option === 'warning') {
      return css`
        background: rgba(255, 127, 0, 0.1);
        color: #e57200;
      `;
    }

    if (option === 'priceDown') {
      return css`
        background: #e5f7ef;
        color: #007a42;
        & > svg {
          & > * {
            fill: #007a42;
          }
        }
      `;
    }
    if (option === 'oversized') {
      return css`
        background: #f5f4f1;
        margin-bottom: 8px;
      `;
    }

    return 'background: #F5F4F1;';
  }}
  & > svg,
  & > div {
    margin-left: 6px;
  }
  & > div {
    height: 20px;
    width: 20px;
  }
`;
