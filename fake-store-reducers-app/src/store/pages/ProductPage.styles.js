import styled from "styled-components";

export const Image = styled.img`
    border-radius: 4px;
    height: 100%;
    max-height: 500px;
    max-width: 500px;
    object-fit: contain;
    width: 100%;
`;

export const Product = styled.div`
    background-color: #fff;
    box-shadow: var(--shadow);
    display: flex;
    gap: 40px;
    padding: 20px 33px;
    width: 100%;

    @media screen and (max-width: 900px) {
        flex-wrap: wrap;
        gap: 20px;

        h2, h3 {
            font-size: 20px;
        }

        p {
            font-size: 14px;
            text-align: justify;
        }
    }
`;

export const ProductImage = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    @media screen and (max-width: 1100px) {
        gap: 5px;
    }
`;