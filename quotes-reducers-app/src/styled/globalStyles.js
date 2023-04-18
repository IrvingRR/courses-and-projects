import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`

    :root {
        /* Variables */

        --background-primary-color-light: #e9ecf3;
        --background-secondary-color-light: #fff;
        --background-third-color-light: #ebebeb;
        --font-color-light: #262626;
        --inputs-color-light: #fff;
        --shadow-down-light: 0px 5px 5px 0px rgba(204,204,204,0.75);
        --shadow-down-right-light: 1px 1px 5px 0px rgba(204,204,204,0.75);
        --background-gradient-light: rgba(255, 255, 255, 0.818);
        --border-color-light: #ccc;

        --background-primary-dark: #071d34;
        --background-secondary-dark: #1c3146;
        --background-third-dark: #273d53;
        --font-color-dark: #fff;
        --inputs-color-dark: #0f2d4e;
        --shadow-down-dark: 0px 5px 5px 0px rgba(15, 45, 78, 0.75);
        --shadow-down-right-dark: 1px 1px 5px 0px rgba(15, 45, 78, 0.75);
        --background-gradient-dark: rgba(7, 30, 54, 0.655);
        --border-color-dark: #273d53;

        --primary-color: #4881f3;
        --primary-color-hover: #3965be;

        --secondary-color: #0cbad3;
        --secondary-color-hover: #e24c76;

        --danger-color: #f66262;
        --info-color: #00c0d7;
        --warning-color: #dddd6b;

        --animate-delay: 0.3s;

        --transition: 0.3s ease;
        --radius: 4px;

        --font: 'Work Sans', 'sans-serif';
        --fs-xs: 10px;   /* 10px */
        --fs-s: 11px;    /* 14px */
        --fs-m: 1rem;      /* 16px */
        --fs-l: 1.25rem;  /* 20px */
        --fs-xl: 2.5rem; /* 40px */

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: var(--fs-s);
    }

    body {
        background: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.fontColor};
        font-family: var(--font);
        font-size: var(--fs-s);
    }

    a {
        transition: var(--transition);
        text-decoration: none;
    }

    button,
    input,
    select,
    textarea {
        transition: var(--transition);
        border: 1px solid transparent;
        outline: none;
    }

    button {
        cursor: pointer;
    }

    img {
        object-fit: cover;
    }

    ul, li {
        list-style: none;
    }

    /* Animations */

    @keyframes rotateAnimation {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;