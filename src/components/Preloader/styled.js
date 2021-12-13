import styled from 'styled-components/macro';
import { css } from 'styled-components';

export const PreloaderSC = styled.div`
  z-index: 999;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    border: 3px solid rgba(105, 59, 255, 0.3);
    border-radius: 50%;
    border-top: 3px solid #693bff;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
  }

  ${({ fixed }) => {
    if (fixed) {
      return css`
        position: fixed;
      `;
    }
  }}
  ${({ borderRadius }) => {
    if (borderRadius) {
      return css`
        border-radius: ${borderRadius};
      `;
    }
  }}

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
