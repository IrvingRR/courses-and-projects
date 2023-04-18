import styled from "styled-components";

export const ListItem = styled.li`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--dark-color);
    font-size: var(--fs-s-3);

    p {
        color: var(--gray-color);
    }
`;

export const ColorTag = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${ props => props.color && props.color };
`;
