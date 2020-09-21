import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Form = styled.div`
    width: 800px;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;

        p {
            color: white;
            text-transform: uppercase;
            font-weight: 600;
            margin: 0 0 10px 0;
        }

        input {
            width: 100%;
            border: none;
            padding: 20px;
            background-color: var(--tertiary);
            margin: 0 0 30px 0;
            color: white;
            font-weight: 400;
        }

        select {
            width: 100%;
            border: none;
            padding: 20px;
            background-color: var(--tertiary);
            margin: 0;
            color: white;
            font-weight: 400;
        }        

        span {
            color: var(--secondary);
            font-weight: 600;
            margin: 20px 0;
            cursor: pointer;

            &:first-of-type {
                margin: 5px 0 30px 0;
                color: white;
                font-weight: 400;
                font-style: italic;
                cursor: text;
            }
        }
    }
`;