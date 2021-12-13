import styled from 'styled-components';
import Select from 'react-select';

export const DeliverySelectorStyled = styled.div`
  //width: 336px;
  .title_label {
    margin-bottom: 8px;
  }
  .description {
    font-size: 12px;
    line-height: 16px;
    color: #807c77;
    margin-top: 4px;
  }
`;

export const SelectStyled = styled(Select)`
  .select__control {
    background: #ffffff;
    border: 1px solid #dcd9d2;
    box-sizing: border-box;
    border-radius: 20px;
    min-height: 40px;

    &.select__control--is-focused {
      border: 1px solid #acaaa7;
      box-shadow: none;
    }
  }
  .select__indicator-separator {
    display: none;
  }

  .select_label {
    .select_label_top {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 24px;
      img {
        margin-right: 8px;
      }
    }
    .select_label_bottom {
      font-size: 12px;
      line-height: 16px;
      color: #807c77;
      margin-left: 32px;
    }
  }

  .select__control {
    .select_label_bottom {
      display: none;
    }
    .select__value-container {
      height: 38px;
    }
    .select__dropdown-indicator {
      margin-right: 8px;
      transition: transform 0.3s ease;
    }
    &.select__control--menu-is-open {
      .select__dropdown-indicator {
        transform: rotate(180deg);
      }
    }
  }
  .select__menu {
    background: #ffffff;
    border: 1px solid #e2dfd9;
    box-sizing: border-box;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    overflow: hidden;
    z-index: 2;
    .select__menu-list {
      padding: 0;
      .select__option {
        padding: 8px;
        &:not(:last-child) {
          border-bottom: 1px solid #f5f4f1;
        }

        &.select__option--is-selected {
          background: #f6f4eb;
          color: initial;
        }
        &.select__option--is-focused {
          background: #fbfaf6;
        }
      }
    }
  }
`;
