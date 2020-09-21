import {createGlobalStyle} from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    :root {
        --primary: #9f81e0;
        --secondary: #921847;
        --tertiary: #745ba9;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: var(--primary);
    }

    button {
        border: none;
        background-color: var(--secondary);
        padding: 20px 50px;
        color: white;
        font-weight: 600 !important;
        transition: filter 0.3s;

        &:hover {
            filter: brightness(90%);
        }
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

`;