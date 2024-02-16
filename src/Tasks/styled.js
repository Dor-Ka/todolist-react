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
    border-bottom: 1px solid #ddd;
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
        background: green;
        transition: 0.8s;

        &&:hover {
            background: hsl(120, 100%, 30%);
        }

        &&:active {
            background: hsl(120, 100%, 35%);
        }
    `}

    ${({ remove }) => remove && css`
        background: hsl(0, 100%, 40%);
        transition: 0.8s;
        
        &&:hover {
            background: hsl(0, 100%, 50%);
        }

        &&:active {
            background: hsl(0, 100%, 70%);
        }
    `}
`;

export const Content = styled.span`
    word-break: break-word;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;