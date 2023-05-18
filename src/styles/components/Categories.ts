import styled from "styled-components";

export const CategoriesBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    width: 100%;
    height: 100%;
    padding-inline: 20px;
    overflow-y: auto;
`;

export const CategoriesUl = styled.ul`
    list-style: none;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    padding-top: 30px;
`;
