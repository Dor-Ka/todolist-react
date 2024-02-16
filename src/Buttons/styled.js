import styled from "styled-components";

export const ButtonsSection = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: hsl(180, 100%, 25%);
    font-size: 18px;
    transition: 0.8s;

    @media(max-width: 767px) {
        flex-basis: 100%;
        margin: 5px;
    }

    &:hover {
        color: hsl(180, 100%, 30%);
    }

    &:active {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: hsl(0, 0%, 70%);
    }
`;