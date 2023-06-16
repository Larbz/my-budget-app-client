import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
from {
    transform : rotate(0deg);
}
to {
    transform : rotate(360deg);
}
`;
export const Rotate = styled.div<{ size: string }>`
    animation: ${rotate} 3s linear infinite;
    /* ${(props) =>
        props.size &&
        css`
            width:${props.size}
            height:${props.size}
        `} */
    width:${(props)=>props.size};
    height:${(props)=>props.size};
    margin:auto;
`;
