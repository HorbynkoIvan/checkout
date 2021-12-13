import styled from 'styled-components/macro';
import { css } from 'styled-components';

export const ScPriceBlock = styled.div`
  display: flex;
  ${({ directionColumn, directionRowReverse }) => {
    if (directionColumn) {
      return css`
        flex-direction: column;
      `;
    }
    if (directionRowReverse) {
      return css`
        flex-direction: row-reverse;
      `;
    }

    return css`
      flex-direction: row;
    `;
  }}

  & > div,
  & > section {
    ${({ directionColumn, directionRowReverse }) => {
      if (directionColumn) {
        return;
      }
      if (directionRowReverse) {
        return css`
          margin-right: 16px;
        `;
      }

      return css`
        margin-left: 16px;
      `;
    }}
  }

  & > div,
  & > p,
  & > section {
    font: 400 14px / 24px ${({ theme }) => theme.mainFont};
    text-align: right;
    color: #807c77;
  }

  & > p {
    color: #000000;
    font-weight: 700;
  }

  & > div {
    text-decoration: line-through;
  }
`;
