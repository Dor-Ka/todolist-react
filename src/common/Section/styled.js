import styled from "styled-components";

export const Page = styled.section`
  margin: 10px 0px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 3px ${({ theme }) => theme.color.silver};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`;

export const Header = styled.header`
  margin: 0;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.silver};
  font-size: 20px;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;

export const Body = styled.div`
  padding: 20px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 10px;
`;
