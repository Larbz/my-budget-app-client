import styled, { css } from "styled-components";

export const TransactionsBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    /* width: 100%; */
    padding-inline: 20px;
`;

export const TransactionsUl = styled.ul`
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    padding-top: 30px;
`;
export const CirclePagination = styled.button<{ selected: boolean }>`
    color: white;
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.5);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    cursor: pointer;
    border: none;
    outline: none;
    ${(props) =>
        props.selected &&
        css`
                    background-color: rgba(255,255,255,0.1);

        `}
`;

export const InputPagination = styled.input<{ width: number }>`
    /* style={{width:"40px",height:"40px",textAlign:"center",appearance:"textfield" , MozAppearance:"textfield"}}  */
    height: 50px;
    /* padding: 10px; */
    text-align: center;
    ${(props) =>
        props.width &&
        css`
            width: ${props.width+5}ch;
    `};
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        /* margin: 0; */
    }
`;

export const TransactionsBodyBox =styled.div`
    display: flex;
    flex-direction: column;
    max-height: 700px;
    overflow-y: scroll;
    gap: 10px;
`