import styled from "styled-components";

export const Container = styled.div`

    padding: .7rem;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 1rem;

    .skill-item-content{
        display: flex;
        gap: .7rem;
        align-items: center;
    }

    .skill-item-content img {
        height: 1.5rem;
    }
`
