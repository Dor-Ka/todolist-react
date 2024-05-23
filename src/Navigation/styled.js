import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const activeClasName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClasName,
}))`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    
    &.${activeClasName} {
        fonth-weight: bold;
    }
`;

export const List = styled.ul`
    background: ${({ theme }) => theme.color.teal};
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;
`;

export const Item = styled.li`
    margin: 20px;
`;