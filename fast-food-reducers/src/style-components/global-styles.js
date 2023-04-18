import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
    --bg-dark: #2b304d;
    --color-dark: #fff;
    --bg-component-dark: #3f4365;
    --border-color-dark: #636b97;
    --third-color-dark: #636b97;
    --third-color-dark-hover: #4a5070;

    --bg-light: #eeeeee;
    --colot-light: #333;
    --bg-component-light: #fff;
    --border-color-light: #ccc;
    --third-color-light: #ccc;
    --third-color-light-hover: #eee;

    --primary-color: #f8267e;
    --primary-color-hover: #b61b5b;
    --secondary-color: #3ad2be;
    --secondary-color-hover: #2ba090;

    --font: 'Raleway', sans-serif;

    --radius-primary: 4px;
    --radius-secondary: 80px;
    --radius-button: 4px;
    
    --transition: 0.3s ease;

    --fs-s: 12px;
    --fs-m: 14px;
    --fs-l: 20px;
    --fs-xl: 30px;

    --shadow-down: 0px 3px 5px 0px ${ props => props.theme.background };
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    background-color: ${ props => props.theme.background };
    color: ${ props => props.theme.fontColor };
    font-family: var(--font);
    font-size: var(--fs-m);
    }

    a {
    text-decoration: none;
    transition: var(--transition);
    color: ${ props => props.theme.fontColor };
    }

    input,
    select,
    textarea,
    button {
    transition: var(--transition);
    outline: none;
    border: 1px solid transparent;
    }

    button { cursor: pointer; }

    /* Animations */
    @keyframes show-from-up {
    0% {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-50px);
    };

    100% {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    };
    }
`;