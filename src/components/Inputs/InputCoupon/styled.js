import styled, { css } from 'styled-components';
import Button from '../../Buttons/Button';

export const InputBlockSC = styled.div`
  .row {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
  }
`;

export const InputSC = styled.input`
  width: 100%;
  height: 36px;
  background: #ffffff;
  border: 1px solid #dcd9d2;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 8px 16px;
  padding-right: 160px;

  outline: none;

  ${({ error }) =>
    error &&
    css`
      border: 1px solid #eb3700;
    `}
`;

export const InputLabelSC = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`;

export const InputErrorSC = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #eb3700;
  margin-top: 4px;
`;

export const InnerInputButtonSC = styled(Button)`
  position: absolute;
  top: 2px;
  right: 2px;
  border-radius: 20px;
  height: 32px;
`;

export const InputWrapSC = styled.div`
  position: relative;
`;
