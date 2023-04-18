import styled from 'styled-components';

export const CartProductElement = styled.li`
    background-color: var(--third-color);
    border-radius: 8px;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding: 10px 20px;
    width: 100%;

    img { 
        width: 50px;
        height: 50px;
    }

    .cart-product-information {

        display: flex;
        align-items: center;
        gap: 20px;

        h3 {
            width: 150px;
            font-weight: bold;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        span {
            font-size: 14px;
            color: var(--danger-color);
        }
    }

    .cart-product-actions {
        display: flex;
        align-items: center;
        gap: 5px;

        span {
            font-weight: bold;
            font-size: 14px;
        }
    }

`;