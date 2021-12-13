import styled, { css } from 'styled-components/macro';

// const normalizeCSSSize = (size) =>
//   Number.isInteger(size) ? `${size}px` : size;

export const ScButton = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 20px;
  border-color: ${({ borderColor }) => borderColor};
  text-align: center;
  font: 700 14px / 24px ${({ theme }) => theme.mainFont};
  color: ${({ textColor }) => textColor || '#ffffff'};
  background: ${({ bgColor }) => bgColor || '#FF7F00'};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  transition: opacity 0.3s;
  box-sizing: border-box;
  ${({ lg }) =>
    lg &&
    css`
      font-size: 16px;
      padding: 8px 32px;
    `}
  ${({ md }) =>
    md &&
    css`
      padding: 6px 32px;
      max-width: none;
    `}
  ${({ sm }) =>
    sm &&
    css`
      padding: 4px 32px;
    `}
  &:hover {
    opacity: 0.8;
  }
`;
