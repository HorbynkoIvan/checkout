import styled from 'styled-components/macro';

export const ScInputPromo = styled.label`
  cursor: text;
  position: relative;
  display: inline-block;
  padding-bottom: 16px;
  ${({ disabled }) => (disabled ? 'opacity: 0.5; pointer-events: none;' : null)}
  & > input {
    outline: none;
    min-width: 290px;
    background: #ffffff;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;
    font: 400 14px / 21px ${({ theme }) => theme.mainFont};
    color: #000000;
    padding: 15px 20px;
    &:focus {
      & ~ span.placeholder {
        display: none;
      }
    }
  }
  .placeholder {
    position: absolute;
    z-index: 1;
    top: calc(50% - 8px);
    left: 0;
    right: 0;
    transform: translateY(-50%);
    text-align: center;
    font: 400 14px / 21px ${({ theme }) => theme.mainFont};
    color: #000000;
  }
  .error__text {
    position: absolute;
    top: calc(100% - 16px);
    left: 0;
    font: 400 14px / 16px ${({ theme }) => theme.mainFont};
    color: red;
  }
`;
