import { Link } from 'react-router-dom';
import styled from "styled-components";

export const ClassesCard = styled(Link)`
    width: 250px;
    height: 320px;
    border-radius: var(--radius);
    background-color: var(--background-secondary-color);
    color: var(--font-primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;
    border-bottom: 3px solid var(--background-third-color);
    overflow: hidden;
    transition: var(--transition);
    position: relative;

    &:hover {
        transform: translateY(-5px);
        border-bottom-color: var(--primary-color);
    }
`;

export const ClassesCardHeader = styled.div `
    width: 100%;
    height: 150px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: var(--transition);
    }
`;

export const ClassesCardBody = styled.div`
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: var(--fs-xs);

    p {
        line-height: 20px;
        color: var(--font-secondary-color);
    }
`;

export const ClassesCardFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    
    img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        object-fit: cover;
    }

    .classes-card-footer-information {
        display: flex;
        flex-direction: column;
        gap: 3px;
        
        span,
        p {
            font-size: var(--fs-xs);
        }

        p {
            font-weight: bold;
            font-size: 10px;
        }
    }

`;

export const ClasesCardsLegend = styled.p`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: var(--font-primary-color);
    padding: 20px;
`;

export const ClassesCardActions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-self: flex-end;
    position: absolute;
    bottom: 10px;
`;