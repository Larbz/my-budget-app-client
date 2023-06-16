import styled, { css, keyframes } from "styled-components";

export const SidebarBox = styled.div`
    /* width: 100%;
    height: 100%; */
    background-color: rgba(255, 255, 255, 0.01);
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
    justify-content: center;
    cursor: pointer;
    padding-block: 5px;
    @media screen and (min-width: 768px) {
        justify-content: space-between;
    }
    ${(props) =>
        props.active &&
        css`
            &:nth-child(1) ~ .indicator {
                transform: translateY(-3px);
            }
            &:nth-child(2) ~ .indicator {
                transform: translateY(57px);
            }
            &:nth-child(3) ~ .indicator {
                transform: translateY(117px);
            }
            &:nth-child(4) ~ .indicator {
                transform: translateY(177px);
            }
            &:nth-child(5) ~ .indicator {
                transform: translateY(237px);
            }
        `}
`;

export const SidebarLiGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const SidebarIconGroup = styled.div`
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SidebarSpan = styled.span`
    font-size: 0.8125rem;
    display: none;
    @media screen and (min-width: 768px) {
        display: unset;
    }
`;

export const Indicator = styled.div`
    width: 5px;
    height: 42px;
    background-color: white;
    position: absolute;
    top: 12px;
    right: 0px;
    display: none;
    transition: 0.5s;
    @media screen and (min-width: 768px) {
        display: unset;
    }
`;
