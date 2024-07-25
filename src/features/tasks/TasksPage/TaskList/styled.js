import { Link } from "react-router-dom/";
import styled, { css } from "styled-components";


export const List = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.ghost};
    align-items: center;
    padding: 10px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Button = styled.button`
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    padding: 0px;

    ${({ taskDone }) => taskDone && css`
        background: ${({ theme }) => theme.color.green};
        transition: 0.8s;

        &:hover {
            filter: brightness(115%);
       }

        &:active {
            filter: brightness(130%);
        }
    `}

    ${({ remove }) => remove && css`
        background: ${({ theme }) => theme.color.cardinal};
        transition: 0.8s;
        
        &:hover {
            filter: brightness(115%);
        }

        &:active {
            filter: brightness(130%);
        }
    `}
`;

export const Content = styled.span`
    word-break: break-word;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: ${({ theme }) => theme.color.black};
`;