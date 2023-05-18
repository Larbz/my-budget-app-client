import styled, { css } from "styled-components";
export const Main = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 220px 1fr;
    overflow: hidden;
`;

export const Table = styled.table`
    width: 100%;
    border-spacing: 0;
    padding-top: 20px;
    && tr th{
        text-align:left;
        font-size: 1.2rem;
    }
`

export const TableRow=styled.tr`
    &:nth-child(2n){
        background-color: gray;
    }
    font-size: .8rem;
`

export const TableData=styled.td<{center?:boolean}>`
    ${(props)=>
        props.center && css`
            text-align:center;
            cursor: pointer;
        `    
}    
`