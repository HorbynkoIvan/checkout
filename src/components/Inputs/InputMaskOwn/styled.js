import styled, { css } from 'styled-components';

export const InputMaskBlockStyled = styled.div`
  .row {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
  }
`;

export const InputMaskWrapStyled = styled.div`
  position: relative;
`;

export const InputMaskStyled = styled.input`
  font-size: 14px;
  line-height: 24px;
  width: 100%;
  height: 40px;
  background: #ffffff;
  border: 1px solid #dcd9d2;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 7px 16px 8px;
  ${({ isPhoneActivated }) =>
    isPhoneActivated &&
    css`
      padding-left: 50px;
    `}

  outline: none;
  ${({ error }) =>
    error &&
    css`
      border: 1px solid #eb3700;
    `}
`;

export const InputMaskLabelStyled = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`;

export const InputErrorCrossStyled = styled.div`
  position: absolute;
  right: 22px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 1px;
    background: #eb3700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const InputMaskErrorSC = styled.p`
  font: 400 12px / 16px ${({ theme }) => theme.mainFont};
  color: #eb3700;
  margin-top: 4px;
`;
export const InputCodeSC = styled.div`
  font-size: 14px;
  line-height: 24px;
  display: none;
  ${({ isPhoneActivated }) =>
    isPhoneActivated &&
    css`
      display: block;
    `}
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
`;
