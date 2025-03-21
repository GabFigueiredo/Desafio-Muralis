import styled from "styled-components";

export const Button = styled.button `
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem 1rem;

    color: ${props => props.theme.orangeMuralis};
    border: solid 1px ${props => props.theme.orangeMuralis};

    border-radius: 6px;

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: ${props => props.theme.orangeMuralis};
        color: ${props => props.theme.white};
    }
`