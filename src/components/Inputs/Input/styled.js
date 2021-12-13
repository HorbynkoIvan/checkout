import styled, { css } from 'styled-components';
import showPassword from '../../../assets/img/show_pass.svg';
import hidePassword from '../../../assets/img/hide_pass.svg';

export const InputBlockStyled = styled.div`
  .row {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  background: #ffffff;
  border: 1px solid #dcd9d2;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 8px 30px 8px 16px;

  outline: none;

  ${({ error }) =>
    error &&
    css`
      border: 1px solid #eb3700;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid #f0efec;
    `}
`;

export const InputLabelStyled = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #000000;

  ${({ disabled }) =>
    disabled &&
    css`
      color: #807c77;
    `}
`;

export const InputErrorCrossStyled = styled.div`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 1px;
    background: #eb3700;
    top: 50%;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const InputButtonStyled = styled.button`
  border: none;
  outline: none;
  padding: 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #807c77;
  background: transparent;
  border-bottom: 1px dotted #807c77;
  ${({ disable }) => {
    if (disable) {
      return css`
        border-bottom: 1px dotted transparent;
        min-width: 160px;
      `;
    }
  }}
`;

export const InputWrapStyled = styled.div`
  position: relative;
`;

export const InputShowPasswordStyled = styled.div`
  position: absolute;
  right: 22px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background: url(${({ isShowedPassword }) =>
      !isShowedPassword ? showPassword : hidePassword})
    center no-repeat;
  cursor: pointer;
`;

export const InputErrorSC = styled.p`
  font: 400 12px / 16px ${({ theme }) => theme.mainFont};
  color: #eb3700;
  margin-top: 4px;
`;
