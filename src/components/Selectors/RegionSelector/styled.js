import styled from 'styled-components';
import Select from 'react-select';

export const RegionSelectorStyled = styled.div`
  .title_label {
    margin-bottom: 8px;
  }
`;

export const SelectStyled = styled(Select)`
  .select__indicator-separator {
    display: none;
  }

  .select_label {
    font-size: 14px;
    line-height: 24px;
  }

  .select__control {
    background: #ffffff;
    border: 1px solid #dcd9d2;
    box-sizing: border-box;
    border-radius: 20px;
    min-height: 40px;
    .select__value-container {
      height: 38px;
      padding: 2px 16px;
      .select__single-value {
        max-width: calc(100% - 32px);
      }
    }
    .select__placeholder {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 264px;
    }
    .select__indicators {
      display: none;
    }

    &.select__control--is-focused {
      border: 1px solid #acaaa7;
      box-shadow: none;
    }
  }

  .select__menu {
    background: #ffffff;
    border: 1px solid #e2dfd9;
    box-sizing: border-box;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    overflow: hidden;
    z-index: 2;
    .select__menu-list {
      position: relative;
      padding: 0;
      max-height: 300px;
      overflow-y: auto;
      .select__option {
        padding: 8px 24px;
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
