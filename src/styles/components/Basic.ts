import styled, { css } from "styled-components";
export const Main = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 220px 1fr;
`;

export const Table = styled.table`
    width: 100%;
    border-spacing: 0;
    padding-top: 20px;
    && tr th{
        text-align:left;
    }
`

export const TableRow=styled.tr`
    &:nth-child(2n){
        background-color: gray;
    }
    padding: 0;
`

export const TableData=styled.td`
    padding: 0;
`