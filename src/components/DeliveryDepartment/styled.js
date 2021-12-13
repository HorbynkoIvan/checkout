import styled from 'styled-components';
import { theme } from '../../assets/css/theme';

export const DeliveryDepartmentStyled = styled.div`
  .title_inner {
    margin-bottom: 8px;
  }
  .np_cargo_warning {
    display: flex;
    border: 1px solid ${theme.orange};
    margin-bottom: 8px;
    svg {
      flex-shrink: 0;
    }
    .np_cargo_text {
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      margin-left: 8px;
    }
  }
`;

export const RowStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;
