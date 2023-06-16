import styled, { css } from "styled-components";
export const Main = styled.div<{ variant?: boolean }>`
    height: 100%;
    width: 100%;
    display: grid;
    place-content: center;
    /* background-image: radial-gradient(
        circle,
        #263747,
        #293a4a,
        #2b3c4c,
        #2e3f4f,
        #314252,
        #304050,
        #303d4d,
        #2f3b4b,
        #2b3342,
        #262c3a,
        #222431,
        #1d1d29
    ); */
    --tw-bg-opacity: 1;
    /* background-color: rgb(8 6 36/var(--tw-bg-opacity)); */
    /* background: linear-gradient(320deg,#f27121,#e94057,#8a2387); */
    /* background-image: linear-gradient(to right, #434343 0%, black 100%); */
    background-color: #161623;

    ${(props) =>
        props.variant &&
        css`
            grid-template-columns: 60px 1fr;

            place-content: unset;
            overflow: hidden;
            @media screen and (min-width: 768px) {
                grid-template-columns: 220px 1fr;
            }
        `}
`;

export const Table = styled.table`
    width: 100%;
    border-spacing: 0;
    padding-top: 0px;
`;

export const TableRow = styled.tr`
    &:nth-child(2n) {
        background-color: rgba(255, 255, 255, 0.1);
    }
    font-size: 0.8rem;
`;

export const TableData = styled.td<{ center?: boolean }>`
    text-align: left;
    ${(props) =>
        props.center &&
        css`
            text-align: center;
            cursor: pointer;
        `}
`;

export const TableHeader = styled.th<{center?:boolean}>`
    text-align: left;
    font-size: 1.2rem;
    position: sticky;
    top: 0px;
    background-color: #161623;
    padding-block: 5px;
    ${(props) =>
        props.center &&
        css`
            text-align: center;
            cursor: pointer;
        `}
`;

export const WrapperAndCenter = styled.div`
    /* position: absolute; */
    width: 100%;
    height: 100%;
    display: grid;
    /* place-items: center; */
    justify-content: center;
    align-items: center;
`;
