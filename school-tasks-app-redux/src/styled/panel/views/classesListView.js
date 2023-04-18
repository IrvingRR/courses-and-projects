import styled from 'styled-components';

export const ClassesListContainer = styled.ul`
    width: 100%;
    height: 80vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const TableClasses = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-radius: var(--radius);
    padding: 20px;
    border-radius: var(--radius);
    overflow: hidden;

    thead tr {
        background-color: var(--background-third-color);
    }

    tr {
        background-color: var(--background-secondary-color);
        border-bottom: 2px solid var(--background-primary-color);
        border-radius: var(--radius);
    }

    td, th {
        text-align: left;
        font-size: var(--fs-xs);
        padding: 10px;
    }

    td.table-classes-teacher {
        display: flex;
        align-items: center;
        gap: 8px;

        img {
            width: 30px;
            height: 30px;
            border-radius: 100%;
            object-fit: cover;
        }
    }

    td.table-classes-description {
        
        p {
            display: block;
            width: 250px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    td.table-actions {
        display: flex;
        height: 100%;
        align-items: center;
        gap: 8px;

    }

    .table-no-records {
        font-size: var(--fs-xs);
        background-color: transparent;
    }
`;

