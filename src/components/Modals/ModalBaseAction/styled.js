import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { device } from '../../theme/theme';

const normalizeCSSSize = (size) =>
  Number.isInteger(size) ? `${size}px` : size;

export const ModalBaseActionSC = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1000;
  padding-top: 180px;
  @media only screen and ${device.mobile} {
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${({ isShow }) =>
    isShow
      ? css`
          animation: opacityAnimation 0.3s 0s forwards;
        `
      : null}

  @keyframes opacityAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalBaseActionWrapperSC = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100% - 32px);
  max-width: ${({ modalWidth }) => normalizeCSSSize(modalWidth)};
  border-radius: 20px;
  height: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background: #f0f0f0;
`;

export const ModalBaseActionHeaderSC = styled.div`
  position: relative;
  padding: 16px 60px 8px 16px;
  min-height: 50px;
  & > button {
    &:last-child {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 16px;
      top: 16px;
      z-index: 11;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background: none;
      border: none;
      outline: none;
      & > svg {
        pointer-events: none;
      }
    }
  }
`;

export const ModalBaseActionContentSC = styled.div`
  font: 400 14px / 24px ${({ theme }) => theme.mainFont};
  color: #000000;
  padding-left: 16px;
  & > h2 {
    color: #000000;
    font: 700 18px / 20px ${({ theme }) => theme.mainFont};
  }
  & > div {
    padding: 16px 16px 16px 0;
  }
`;
