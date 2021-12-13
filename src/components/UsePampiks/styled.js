import styled from 'styled-components/macro';
import { ReactComponent as ChevronIcon } from '../../assets/img/chevron.svg';
import Input from '../Inputs/Input';

export const UsePampiksStyled = styled.div`
  position: relative;
  max-width: 328px;
  width: 100%;

  border: 1px solid
    ${({ usePampiksDisabled }) => (usePampiksDisabled ? '#E2DFD9' : '#e2dfd9')};
  box-sizing: border-box;
  border-radius: 20px;

  overflow: hidden;

  .btn {
    width: 100%;
    height: 40px;
    background: #ff7f00;
  }
`;

export const UsePampiksTopStyled = styled.div`
  position: relative;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  padding: 8px 16px;
  p {
    opacity: ${({ usePampiksDisabled }) => (usePampiksDisabled ? 0.5 : 1)};
  }
`;

export const UsePampiksBottomStyled = styled.div`
  padding: 0 16px 16px;
`;

export const InfoContainerStyled = styled.div``;

export const InfoContainerButtonCancelStyled = styled.div`
  margin-bottom: 16px;
`;

export const InfoCountStyled = styled.div`
  border: 1px solid #e2dfd9;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 16px;

  font-size: 12px;
  line-height: 16px;
  span {
    font-weight: bold;
  }
`;

export const HrStyled = styled.div`
  width: 100%;
  height: 1px;
  background: #e2dfd9;
  margin-bottom: 16px;
`;

export const RadioGroupStyled = styled.div``;

export const ChevronIconStyled = styled(ChevronIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) ${({ open }) => open && `rotate(-180deg)`};
  right: 19px;
  transition: 0.3s;
  path {
    fill: ${({ $usePampiksDisabled }) =>
      $usePampiksDisabled ? '#DCD9D2' : '#807C77'};
  }
`;

export const UsePampiksRadioStyled = styled.div`
  margin-bottom: 16px;
  & > div {
    margin-bottom: 16px;
    &:nth-child(1) {
      & > div {
        font-weight: bold;
      }
    }
    &:nth-child(2) {
      margin-bottom: 0;
      & > div {
        display: flex;
        align-items: center;
      }
    }
  }
  & > span {
    display: inline-block;
    margin-top: 4px;
    font: 400 12px / 16px ${({ theme }) => theme.mainFont};
    color: #eb3700;
  }
`;

export const InputStyled = styled(Input)`
  margin: 0 8px;
  width: 60px;
  input {
    height: 36px;
    padding: 8px;
    text-align: center;
  }
`;
