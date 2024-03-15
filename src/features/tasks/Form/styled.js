import styled from "styled-components";

export const TasksForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.silver};
`;

export const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.teal};
    color: white;
    transition: 0.8s;

    &:hover {
        filter: brightness(115%);
        transform: scale(1.15);

        @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
            transform: scale(1.05);
        }
    }

    &:active {
        filter: brightness(130%);
    }
`;