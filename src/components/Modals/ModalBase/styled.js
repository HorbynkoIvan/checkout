import styled from 'styled-components/macro';
import { css } from 'styled-components';
import { device } from '../../../theme/theme';

const normalizeCSSSize = (size) =>
  Number.isInteger(size) ? `${size}px` : size;

export const ModalBaseSC = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1000;
  padding-top: 84px;
  @media only screen and ${device.tablet} {
    padding-top: 0;
    height: 100%;
    max-height: 100vh;
  }
  @media only screen and ${device.mobile} {
    padding-top: 0;
    height: 100%;
    max-height: 100vh;
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

export const ModalBaseWrapperSC = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100% - 32px);
  max-width: ${({ modalWidth }) => normalizeCSSSize(modalWidth)};
  border-radius: 20px;
  height: auto;
  background: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  @media only screen and ${device.tablet} {
    margin-left: 0;
    width: 360px;
    height: 100%;
    border-radius: 0;
  }
  @media only screen and ${device.mobile} {
    margin-left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export const ModalBaseHeaderSC = styled.div`
  position: relative;
  padding: 16px 60px 8px 16px;
  border-bottom: 1px solid #e2dfd9;
  & > div {
    display: flex;
    flex-direction: column;
    & > span {
      &:nth-child(1) {
        font: 700 18px / 28px ${({ theme }) => theme.mainFont};
        color: #000000;
      }
      &:nth-child(2) {
        font: 400 14px / 24px ${({ theme }) => theme.mainFont};
        color: #807c77;
      }
    }
  }
  & > button {
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
`;

export const ModalBaseContentSC = styled.div`
  font: 400 14px / 24px ${({ theme }) => theme.mainFont};
  color: #000000;
  padding-left: 16px;
  ${({ isFooterContent }) => !isFooterContent && 'padding-bottom: 16px;'}
  & > div {
    max-height: 445px;
    overflow-y: auto;
    padding: 16px 16px 0 0;
  }
  @media only screen and ${device.tablet} {
    height: calc(100% - 53px);
    & > div {
      height: 100%;
      max-height: 100%;
    }
    ${({ subTitle }) => {
      if (subTitle) {
        return css`
          height: calc(100% - 80px);
        `;
      }
    }}
    ${({ isFooterContent }) => {
      if (isFooterContent) {
        return css`
          height: calc(100% - 160px);
        `;
      }
    }}
  }

  @media only screen and ${device.mobile} {
    height: calc(100% - 53px);
    & > div {
      height: 100%;
      max-height: 100%;
    }
    ${({ subTitle }) => {
      if (subTitle) {
        return css`
          height: calc(100% - 80px);
        `;
      }
    }}
    ${({ isFooterContent }) => {
      if (isFooterContent) {
        return css`
          height: calc(100% - 160px);
        `;
      }
    }}
  }
`;

export const ModalBaseFooterSC = styled.div`
  border-top: 1px solid #e2dfd9;
  padding: 16px 32px;
`;
