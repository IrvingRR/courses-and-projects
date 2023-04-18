import styled from 'styled-components';
import { ButtonStyled } from '../Button/styles';

export const ButtonIconStyled = styled(ButtonStyled)`
    width: 30px;
    height: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 1px;

    svg {
        font-size: 20px;
    } 
`;