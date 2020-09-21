import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 800px;
    margin: 0 auto 90px;
    background-color: var(--secondary);
    padding: 30px;
`;

export const Menu = styled.h2`
    color: white;
    cursor: pointer;
    font-weight: 200;

    &:hover {
        border-bottom: 1px solid white;
        font-weight: 600;
    }

    ${props => props.selected && css `
        border-bottom: 1px solid white;
        font-weight: 600;
    `}
`;