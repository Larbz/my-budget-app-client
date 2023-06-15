import styled, { createGlobalStyle, css } from "styled-components";
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 50px;
    /* width: 400px; */
    justify-content: center;
    align-items: center;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-left: 1px solid rgba(255, 255, 255, 0.3);
`;

export const FormTitle = styled.h3`
    font-size: 1.2rem;
    color: white;
`;

export const InputLabel = styled.label`
    font-size: 1rem;
    position: absolute;
    color: black;
    scale: 1;
    transform: translate(15px, 7.5px);
    transition: transform 0.5s, color 0.3s;
`;

export const Input = styled.input<{ isValid: boolean }>`
    outline: none;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    width: 250px;
    font-family: "Montserrat", sans-serif;
    ${(props) =>
        !props.isValid &&
        css`
            border: 1px solid red;
        `}
    &::placeholder {
        color: transparent;
    }
    &:focus + ${InputLabel},&:not(:placeholder-shown) + ${InputLabel} {
        color: white;
        transform: translate(0, -25px);
        scale: 1;
    }
`;

export const GroupInput = styled.div`
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
`;

export const Button = styled.button`
    border: none;
    padding: 10px 20px;
    background-color: white;
    border-radius: 30px;
    cursor: pointer;
    color: white;
    background-color: #352598;
`;
