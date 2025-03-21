import styled from "styled-components";

export const AutoLayout = styled.div `
    width: 100%;

    display: flex;
    align-items: center;

    border-radius: 6px;
    padding: 0px;
    gap: 16px;

    gap: 1rem;
`

export const SearchField = styled.form `
    display: flex;
    flex: 1;
    align-items: center;
    background-color: ${props => props.theme.inputGray};
    border-radius: 6px;
    gap: 0.5rem;

    > input {
        flex: 1;

        padding: 1rem;
        border-radius: 6px;
        border: 0;
        background-color: ${props => props.theme.inputGray};
        &::placeholder {
            color: ${props => props.theme.placeholder};
        }
    }

    > button {
        display: flex;
        justify-content: center;
        align-items: center;

        border: 0;
        background-color: ${props => props.theme.inputGray};
        margin: 1rem;
        color: ${props => props.theme.placeholder};

        height: min-content;
        border-radius: 6px;
        cursor: pointer;
    }

`