import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
    background: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    transition: 0.3s ease;
    width: 200px;
    border: 1px solid transparent;
    color: var(--font-color);
    position: relative;

    img {
        height: 150px;
        object-fit: contain;
        width: 100%;
    }

    &:hover {
        transform: translateY(-5px);
        border-color: #eee;
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    gap: 5px;
    padding: 10px;
    width: 100%;

    h3 {
        font-weight: bold;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    span {
        color: var(--danger-color);
    }
`;

export const CardHeader = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const CardButton = styled.button`
    border-radius: 100%;
    height: 30px;
    width: 30px;
    
    &:hover {
        background-color: var(--danger-color);
        color: #fff;
    }
`;