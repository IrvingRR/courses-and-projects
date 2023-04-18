import styled, { css } from 'styled-components';

export const ShoppingCartElement = styled.div`
    background: #fff;
    /* box-shadow: -4px 2px 5px 0px rgba(238,238,238,0.75); */
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    height: 90vh;
    width: 0;
    transition: 0.3s ease;
    overflow: hidden;
    position: relative;

    h3 {
        padding: 10px 0;
    }

    ${ (props) => props.isActive === true && css`
        width: 400px;
    ` }

    @media (max-width: 1500px) {

        ${ (props) => props.isActive === true && css`
            font-size: 14px;
        ` }

    }
`;

export const CartHeader = styled.div`
    align-items: center;
    display: flex;
    gap: 20px;
    padding: 10px 20px;
    width: 100%;
`;

export const CartTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    h2 {
        font-weight: bold;
        font-size: 25px;
    }
`;

export const CloseButton = styled.button`
    align-items: center;
    background-color: transparent;
    border-radius: 100%;
    border: 1px solid #ccc;
    color: #ccc;
    display: flex;
    font-size: 20px;
    height: 30px;
    justify-content: center;
    width: 30px;
    
    &:hover {
        background-color: var(--danger-color);
        color: #fff;
        border-color: var(--danger-color);
    }
    
    ${ (props) => props.isActive === false && css`
        position: fixed;
        transform: translateX(-100px);
        z-index: 100;
    ` }
`;

export const CartFooter = styled.div`
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    position: absolute;
    width: 100%;
`;

export const CartFooterData = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    
    &:nth-child(3) {
        border-top: 2px dotted #ccc;
        padding-top: 10px;
    }
`;