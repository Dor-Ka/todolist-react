import styled from "styled-components";

export const TasksForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd
`;

export const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: hsl(180, 100%, 25%);
    color: white;
    transition: 0.8s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.15);

        @media (max-width: 767px) {
            transform: scale(1.05);
        }
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;