import styled from "styled-components";

export const Container = styled.main`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        padding: 10px;
        min-width: 250px;
`;