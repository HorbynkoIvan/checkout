import styled, { css } from 'styled-components';

export const ScButtonRadio = styled.div`
  .children {
    cursor: pointer;
    position: relative;
    padding-left: 21px;
    font: 400 14px / 24px ${({ theme }) => theme.mainFont};
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      height: 16px;
      width: 16px;
      background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
      border: 1px solid #c4cdd5;
      border-radius: 100%;
      box-sizing: border-box;
      transition: 0.3s;
    }

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 4px;
      height: 8px;
      width: 8px;
      background: transparent;
      border-radius: 100%;
      box-sizing: border-box;
    }

    ${({ isActive }) =>
      isActive &&
      css`
        &:before {
          border: 1px solid #6a3cfd;
        }
        &:after {
          background: #6a3cfd;
        }
      `}

    ${({ disabled }) =>
      !disabled
        ? css`
            &:hover::before {
              border: 1px solid #6a3cfd;
            }
          `
        : css`
            color: #807c77;
            &:after {
              background: ${({ isActive }) => isActive && '#e2dfd9'};
            }
            &:before {
              border: 1px solid #e2dfd9;
            }
            span {
              color: #807c77;
            }
          `}
  }

  .description {
    display: block;
    font: 400 12px / 18px ${({ theme }) => theme.mainFont};
    color: #000000;
    opacity: 0.5;
    margin-left: 21px;
  }
`;
