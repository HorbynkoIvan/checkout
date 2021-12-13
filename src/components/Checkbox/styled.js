import styled from 'styled-components/macro';

export const CheckboxStyled = styled.div`
  display: inline-block;
  //margin-top: 24px;
  input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }

  label {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: flex-start;
  }

  label:before {
    content: '';
    appearance: none;
    background-color: transparent;
    border: 1px solid #6a3cfd;
    border-radius: 2px;
    padding: 7px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-top: 3px;
    margin-right: 8px;
    box-sizing: border-box;
  }

  input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 7px;
    left: 6px;
    width: 5px;
    height: 8px;
    border: solid #6a3cfd;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    box-sizing: border-box;
  }
`;
