import styled from 'styled-components/macro';
import { css } from 'styled-components';

export const ScInfoLabel = styled.div`
  height: ${({ big }) => (big ? '48px' : '32px')};
  width: ${({ big }) => (big ? '48px' : '32px')};
  border-radius: ${({ big }) => (big ? '20px 0 20px 0' : '10px 0 10px 0')};
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ present, delivery, warning }) => {
    if (present) {
      return css`
        background: #f14bc3;
      `;
    }
    if (delivery) {
      return css`
        background: #49a7e0;
      `;
    }
    if (warning) {
      return css`
        background: #ff7f00;
      `;
    }
    return css`
      background: transparent;
    `;
  }}
`;
