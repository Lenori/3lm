import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 1200px;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: white;
    border-bottom: 1px solid var(--secondary);
    padding: 0 20px 20px;
    margin-bottom: 60px;

    h2 {
        width: 30%;
    }

    p {
        width: 40%;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 12%;

    svg {
        font-size: 22px;
        cursor: pointer;
    }
`;