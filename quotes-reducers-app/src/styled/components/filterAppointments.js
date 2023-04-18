import styled from 'styled-components';

export const FiltersAppointments = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const FilterAppointment = styled.div`
    
    label {
        width: 100px;
        border-top-left-radius: var(--radius);
        border-top-right-radius: var(--radius);
        background-color: ${({theme}) => theme.backgroundSecondary};
        color: ${({theme}) => theme.fontColor};
        padding: 8px;
        display: flex;
        align-items: center;
        gap: 5px;
        border: 2px solid transparent;
        cursor: pointer;
        transition: var(--transition);
    }

    input[type='radio'] {
        display: none;
    }

    input:checked ~ label {
        background-color: ${({theme}) => theme.backgroundThird};
        border-left-color: var(--primary-color);
    }
    
    &:hover label {
        background-color: ${({theme}) => theme.backgroundThird};
        border-left-color: var(--primary-color);
    }

    svg {
        font-size: var(--fs-l);
    }
`;