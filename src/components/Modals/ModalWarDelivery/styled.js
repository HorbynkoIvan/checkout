import styled from 'styled-components';
import {theme} from "../../../theme/theme";

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
    padding: 0;
  }

  li {
    list-style: none;
    padding-left: 20px;
    position: relative;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    
    &:before{
      content: '\\25CF';
      position: absolute;
      left: 0px;
    }
    
    &:not(:last-child){
      margin-bottom: 15px;
    }

    b {
      font-weight: bold;
    }
    
    a{
      display: inline-block;
      margin-top: 8px;
      text-decoration: none;
      color: #E57200;
      transition: opacity 0.3s;
      border-bottom: 1px dotted #e57200;
      &:hover {
        opacity: 0.8;
      }
    }

    p {
      font-weight: 600;
    }
  }
}`

