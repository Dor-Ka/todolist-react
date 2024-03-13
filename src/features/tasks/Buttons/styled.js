import styled from "styled-components";

export const WrapedSection = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color.teal};
    font-size: 18px;
    transition: 0.8s;

    @media(max-width: 767px) {
        flex-basis: 100%;
        margin: 5px;
    }

    &:hover {
        filter: brightness(115%);
    }

    &:active {
        filter: brightness(130%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.ghost};
    }
`;