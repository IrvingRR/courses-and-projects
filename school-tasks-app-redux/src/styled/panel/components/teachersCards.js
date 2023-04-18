import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TeachersCardsContainer = styled.div`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const TeacherCard = styled(Link)`
    width: 250px;
    border-radius: var(--radius);
    background-color: var(--background-secondary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    transition: var(--transition);
    border-bottom: 2px solid var(--background-third-color);
    color: var(--font-primary-color);

    &:hover {
        transform: translateY(-3px);
        border-bottom-color: var(--primary-color);
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        border: 2px solid var(--font-primary-color);
        object-fit: cover;
    }

    h3,
    p {
        font-size: var(--fs-xs);
    }

    p {
        color: var(--font-secondary-color);
    }
`;

export const TeacherCardActions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

export const TeachersLegend = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: var(--fa-l);
    color: var(--font-primary-color);
`;