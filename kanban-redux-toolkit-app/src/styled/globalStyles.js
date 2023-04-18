import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --background-primary-color: #fff;
        --background-secondary-color: #f9f9fb;
        --background-third-color: #f1f2f6;

        --primary-color: #7489ea;
        --primary-color-hover: #d9daf8;
        --third-color: #f57f28;
        --third-color-hover: #ffd7bb;
        --fourth-color: #49d1cf;
        --fourth-color-hover: #c5f2f4;
        --secondary-color: #f1f2f7;
        --white-color: #fff;
        --error-color: rgb(236, 102, 102);

        --border-color: #f7f7f7;

        --font: 'Inter', sans-serif;
        --font-primary-color: #404040;
        --font-secondary-color: #bdbcc1;

        --radius: 8px;
        --transition: 0.3s ease;

        --fs-xs: 11px;
        --fs-s: 13px;
        --fs-m: 15px;
        --fs-l: 20px;
        --fs-xl: 30px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background-primary-color);
        font-family: var(--font);
        font-size: var(--fs-s);
    }

    button,
    input,
    textarea,
    select {
        outline: none;
        transition: var(--transition);
        border: 1px solid transparent;
        font-family: var(--font);
    }

    button {
        cursor: pointer;
    }

    a {
        transition: var(--transition);
        text-decoration: none;
    }

    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
    }

    /* Scrollbar */
    /* width */
    ::-webkit-scrollbar {
        width: 3px;
        border-radius: 80px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background-color: var(--border-color);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background-color: var(--background-secondary-color);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;