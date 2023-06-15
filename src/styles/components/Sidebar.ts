import styled, { css, keyframes } from "styled-components";

export const SidebarBox = styled.div`
    width: 220px;
    height: 100%;
    background-color:rgba(255, 255, 255,0.01);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
`;
export const SidebarUl = styled.ul`
    /* padding: 10px; */
    list-style: none;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: space-around;
    position: relative;
`;
export const SidebarLi = styled.li<{ active: boolean }>`
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
    cursor: pointer;
    padding-block: 5px;

    &::after {
        content: "";
        width: 5px;
        height: 100%;
        transition: 0.5s;
    }
    ${(props) =>
        props.active &&
        css`
            &:nth-child(1) ~ .indicator {
                transform: translateY(0px);
            }
            &:nth-child(2) ~ .indicator {
                transform: translateY(60px);
            }
            &:nth-child(3) ~ .indicator {
                transform: translateY(120px);
            }
            &:nth-child(4) ~ .indicator {
                transform: translateY(180px);
            }
            &:nth-child(5) ~ .indicator {
                transform: translateY(240px);
            }
        `}
    &:hover{
        background-color:red;
    }
`;

export const Indicator = styled.div`
    width: 5px;
    height: 36px;
    background-color: white;
    position: absolute;
    top:12px;
    right: 0px;
    transition: 0.5s;
`;
