import styled from 'styled-components/macro';

export const ScPhoneDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 240px;
  & > div {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 30px 0 20px;
    border-radius: 10px 10px 0 0;
    border-top: 1px solid transparent;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    &.is-open {
      background: #ffffff;
      border-top: 1px solid #d9d9d9;
      border-left: 1px solid #d9d9d9;
      border-right: 1px solid #d9d9d9;
      & > button {
        transform: rotateZ(-180deg);
        transition: all 300ms linear;
      }
      & > ul {
        display: block;
        animation: 300ms fadeIn forwards linear;
        border-bottom: 1px solid #d9d9d9;
        border-left: 1px solid #d9d9d9;
        border-right: 1px solid #d9d9d9;
      }
    }
    & > a {
      text-decoration: none;
      font: 700 16px / 24px ${({ theme }) => theme.mainFont};
      color: #000000;
    }
    & > button {
      position: absolute;
      right: 10px;
      cursor: pointer;
      outline: none;
      background: none;
      border: none;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      & > svg {
        pointer-events: none;
      }
    }
    & > ul {
      position: absolute;
      top: 100%;
      right: -1px;
      left: -1px;
      z-index: 100;
      background: #ffffff;
      padding: 4px 20px 10px;
      border-radius: 0 0 10px 10px;
      border-bottom: 1px solid transparent;
      border-left: 1px solid transparent;
      border-right: 1px solid transparent;
      overflow: hidden;
      display: none;
      min-height: 0;
      & > li {
        color: #000000;
        font: 400 12px / 18px ${({ theme }) => theme.mainFont};
        &:last-child {
          border-top: 1px solid #d9d9d9;
          margin-top: 6px;
          padding-top: 6px;
          text-align: center;
        }
        & > a {
          text-decoration: none;
          font: 700 16px / 20px ${({ theme }) => theme.mainFont};
          color: #000000;
        }
      }
    }
  }
  @media (max-width: 767px) {
    & > div {
      padding: 8px 20px 0 20px;
      & > button {
        right: -2px;
      }
    }
  }

  @keyframes fadeIn {
    from {
      height: 0;
      min-height: 0;
    }
    to {
      height: 100%;
      min-height: 120px;
    }
  }
`;
