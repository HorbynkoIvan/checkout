import React from 'react';

import {ReactComponent as WarningIcon} from "../../../assets/img/chevron-right.svg";
import {SCWarDelivery} from './styled';

export const SpecialInfoBlockWarDelivery = () => (
    <SCWarDelivery>
        <span>Умови доставки під час Війни</span>
        <WarningIcon/>
    </SCWarDelivery>
);

