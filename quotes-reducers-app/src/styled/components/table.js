import styled from 'styled-components';

export const TableElement = styled.div`
    width: 100%;
    /* border-radius: var(--radius); */
    
    table {
        width: 100%;
        border-collapse: collapse;
        background-color: ${({ theme }) => theme.backgroundSecondary};
    }

    thead {
        background-color: ${({ theme }) => theme.backgroundThird};
    }

    tr {
        &:nth-child(even) {
            background-color: ${({ theme }) => theme.backgroundThird};
        }
    }

    th {
        padding: 10px;
        font-size: var(--fs-s);
        font-weight: normal;
    }

    td {
        padding: 10px;
        text-align: center;
        font-size: var(--fs-s);

        img {
            width: 30px;
            height: 30px;
            border-radius: 100%;
        }

        .table-cell-flex {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            
        }

        .table-cell-status {
            min-width: 100px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            border-radius: 80px;
            color: #fff;
            padding: 8px;
        }

        .table-cell-informative {
            background-color: var(--info-color);
        }

        .table-cell-urgent {
            background-color: var(--danger-color);
        }

        .table-cell-warning {
            background-color: var(--warning-color);
        }

        .table-cell-completed {
            background-color: var(--info-color);
        }

        .table-cell-canceled {
            background-color: var(--danger-color);
        }

        .table-cell-pending {
            background-color: var(--warning-color);
        }
    }

    /* @media screen and (max-width: 1440px) {
        height: 360px;
        overflow-y: auto; 
    } */
`;