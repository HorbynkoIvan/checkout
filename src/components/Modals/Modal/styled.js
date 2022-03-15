import styled from 'styled-components';
import {device} from "../../../theme/theme";

const normalizeCSSSize = (size) =>
  Number.isInteger(size) ? `${size}px` : size;

export const ModalOverlayStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 1;
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s 0s, visibility 0s 0.3s;

  &.is_visible {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s 0s, visibility 0s 0s;
  }
`;

export const ModalStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 50px 16px 16px;
  box-sizing: border-box;
  width: ${({ modalWidth }) => normalizeCSSSize(modalWidth)};
  border-radius: ${({ borderRadius }) => borderRadius? borderRadius: '5px'};
  height: auto;
  background: ${({ background }) => background? background: '#ffffff'};
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-40px);
  /* Force Hardware Acceleration in WebKit */
  -webkit-backface-visibility: hidden;
  transition-property: transform;
  transition-duration: 0.3s;

  .popup_close {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;

    &:after,
    &:before {
      content: '';
      width: 16px;
      height: 2px;
      background-color: #c4cdd5;
    }

    &:after {
      transform: rotate(45deg);
      position: absolute;
    }

    &:before {
      transform: rotate(-45deg);
      position: absolute;
    }
  }

  @media only screen and ${device.mobile} {
    width: 100%;
    max-width: 330px;
  }
`;
