import styled from "styled-components";

export const MainContainer = styled.main `
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem;

    gap: 1rem;

    > div:first-child {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    > div:first-child > strong {
        font-size: 4rem;
        font-weight: bold;
    }
`