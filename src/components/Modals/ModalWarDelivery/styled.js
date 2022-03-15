import styled from 'styled-components';
import Modal from '../Modal'
import {theme} from "../../../theme/theme";

const normalizeCSSSize = (size) =>
    Number.isInteger(size) ? `${size}px` : size;

export const SCModal = styled(Modal)`{
  background-color: red;
}`

export const SCTitle = styled.h2`{
  font: 400 28px / 42px ${({theme}) => theme.mainFont};
  text-align: center;
  margin: 0 0 15px;
}`

export const SCBlock = styled.div`{
  font-family: ${theme.mainFont};
  text-align: left;
  background: #FFFFFF;
  border-radius: 20px;
  width: 100%;
  padding: 15px;
  &:not(:last-child){
    margin-bottom: 15px;
  }
  
  h3 {
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;
    margin: 0 0 15px;
  }
  
  ul{
    list-style-position: inside;
    padding: 0;
  }

  li {
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    &:not(:last-child){
      margin-bottom: 15px;
    }

    b {
      font-weight: bold;
    }
    
    a{
      display: inline-block;
      margin-top: 8px;
      text-decoration: dotted;
      color: #E57200
    }

    p {
      font-weight: 600;
    }
  }
}`

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
  box-sizing: border-box;
  width: ${({modalWidth}) => normalizeCSSSize(modalWidth)};
  border-radius: 20px;
  height: auto;
  background: #f0f0f0;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-40px);
  /* Force Hardware Acceleration in WebKit */
  -webkit-backface-visibility: hidden;
  transition-property: transform;
  transition-duration: 0.3s;
`;

export const ModalTopStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;

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
`;

export const ModalBodyStyled = styled.div`
  padding: 0 16px 16px;

  h2 {
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
    text-align: left;
  }

  form {
    padding: 16px 0;

    & > .row {
      margin-bottom: 16px;
    }
  }

  .btn_enter {
    width: 100%;
    height: 40px;
  }
`;
