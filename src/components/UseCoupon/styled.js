import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { ReactComponent as ChevronIcon } from '../../assets/img/chevron.svg';

export const UseCouponSC = styled.div`
  position: relative;
  max-width: 328px;
  width: 100%;

  border: 1px solid #e2dfd9;
  box-sizing: border-box;
  border-radius: 20px;

  overflow: hidden;

  .btn {
    width: 100%;
    height: 40px;
    background: #ff7f00;
  }
  ${({ disabled }) => {
    if (disabled) {
      return css`
        border: 1px solid #e2dfd9;
        opacity: 0.5;
      `;
    }
  }}
`;

export const UseCouponTopSC = styled.div`
  position: relative;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  padding: 8px 16px;
`;

export const UseCouponBottomSC = styled.div`
  padding: 0 16px 16px;
`;

export const InfoContainerSC = styled.div`
  .onemore {
    margin-top: 18px;
  }
  & > div:last-child {
    margin-top: 18px;
  }
`;

export const HrSC = styled.div`
  width: 100%;
  height: 1px;
  background: #e2dfd9;
  margin-bottom: 16px;
`;

export const ChevronIconSC = styled(ChevronIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) ${({ open }) => open && `rotate(-180deg)`};
  right: 19px;
  transition: 0.3s;
`;
