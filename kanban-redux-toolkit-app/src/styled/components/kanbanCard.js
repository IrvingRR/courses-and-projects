import styled from 'styled-components';

export const KanbanCardStyled = styled.div`
    width: 100%;
    background-color: var(--background-primary-color);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    transition: var(--transition);
    cursor: grab;
    /* border: 1px solid #ccc; */

    &:hover {
        transform: translateY(-5px);
    }

    .card-information {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            width: 30px;
            height: 30px;
            border-radius: 100%;
        }

        .user-information {
            display: flex;
            flex-direction: column;
            gap: 3px;
            
            h3,
            span {
                font-size: var(--fs-xs);
            }

            span {
                color: var(--font-secondary-color);
            }
        }
    }

    .card-tags {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 5px;
        flex-wrap: wrap;


        .card-tag {
            background-color: #eee;
            font-size: var(--fs-s);
            border-radius: var(--radius);
            align-items: center;
            font-size: var(--fs-xs);
            padding: 5px 8px;
        }
    }
`;