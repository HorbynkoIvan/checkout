import styled from 'styled-components';
import chevron, {
  ReactComponent as ChevronIcon,
} from '../../../assets/img/chevron_select.svg';

import { device, theme } from '../../../theme/theme';

export const DatepickerSelectorStyled = styled.div`
  margin-right: 16px;
  .title_label {
    margin-bottom: 8px;
  }
  .select_date {
    max-width: 156px;
    width: 100%;
    position: relative;
    background: #ffffff;
    border: 1px solid #dcd9d2;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 8px 16px;
    outline: none;

    font-size: 14px;
    line-height: 22px;
    transition: border 0.3s;
    &:hover,
    &:focus {
      border: 1px solid #acaaa7;
    }
  }

  .react-datepicker-popper[data-placement^='top'] {
    margin-bottom: 5px;
  }

  .react-datepicker-popper[data-placement^='bottom'] {
    margin-top: 5px;
  }

  .react-datepicker {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    border-radius: 20px;
    border: 1px solid #dcd9d2;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

    .react-datepicker__navigation--next,
    .react-datepicker__navigation--previous {
      background: url(${chevron}) no-repeat;
      //display: block;
      width: 16px;
      height: 16px;
      border: none;
    }
    .react-datepicker__navigation--next {
      transform: rotate(270deg);
    }
    .react-datepicker__navigation--previous {
      transform: rotate(90deg);
    }

    .react-datepicker__header {
      //background-color: #f0f0f0;
      background-color: #ffffff;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border-bottom: 1px solid #dcd9d2;
      padding-top: 8px;
    }

    .react-datepicker-time__header,
    .react-datepicker-year-header,
    .react-datepicker__current-month {
      text-transform: capitalize;
      font-size: 16px;
    }

    .react-datepicker__day,
    .react-datepicker__day-name,
    .react-datepicker__time-name {
      width: 30px;
      line-height: 30px;
    }

    .react-datepicker__day--in-range,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--selected,
    .react-datepicker__month-text--in-range,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__month-text--selected,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__quarter-text--selected,
    .react-datepicker__year-text--in-range,
    .react-datepicker__year-text--in-selecting-range,
    .react-datepicker__year-text--selected {
      background-color: ${theme.orange};
      border-radius: 50%;
      color: #fff;
    }

    .react-datepicker__day:hover,
    .react-datepicker__month-text:hover,
    .react-datepicker__quarter-text:hover,
    .react-datepicker__year-text:hover {
      background-color: ${theme.grey};
      border-radius: 50%;
      color: #000;
    }

    .react-datepicker__day--keyboard-selected,
    .react-datepicker__month-text--keyboard-selected,
    .react-datepicker__quarter-text--keyboard-selected,
    .react-datepicker__year-text--keyboard-selected {
      //style prevent show selected data in evry month
      background-color: initial;
      color: #ccc;
    }

    .react-datepicker__triangle {
      display: none;
    }
  }
`;

export const DatePickerWrapper = styled.div`
  position: relative;
`;
export const ChevronStyled = styled(ChevronIcon)`
  pointer-events: none;
  position: absolute;
  top: 12px;
  right: 20px;
  z-index: 1;
  transition: transform 0.3s ease;
  &.active {
    transform: rotate(180deg);
  }

  @media only screen and ${device.mobileSm} {
    right: 15px;
  }
`;
