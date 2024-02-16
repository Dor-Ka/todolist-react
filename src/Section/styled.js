import styled from "styled-components";

export const Page = styled.section`
    margin: 10px 0px;
    background-color: white;
    box-shadow: 0 0 3px #ddd;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 20px;
`;

export const Header = styled.header`
    margin: 0;
    padding: 20px;
    border-bottom: 1px solid hsl(0, 0%, 87%);
    font-size: 20px;
    display: grid;
    align-items: center;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    justify-content: space-between;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
}
`;

export const Body = styled.div`
        padding: 20px;
`;




