import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    /* Variables */

    :root {

        /* Theme light colors */

        --background-primary-color-light: rgb(236, 241, 253);
        --background-secondary-color-light: rgb(255, 255, 255);
        --background-third-color-light: rgb(237, 243, 252);
        --font-primary-color-light: rgb(45, 44, 48); //Logo, titles, etc
        --font-secondary-color-light: rgb(187, 187, 187);//Sidebar links
        --font-third-color-light: rgb(163, 170, 184);   // New column text
        --border-color-light: rgb(197, 197, 197);
        --shadow-color-light:  rgb(230, 232, 238);

        /* Theme dark colors */

        --background-primary-color-dark: rgb(34, 35, 46);
        --background-secondary-color-dark: rgb(44, 44, 55);
        --background-third-color-dark: rgb(36, 36, 47);
        --font-primary-color-dark: rgb(249, 250, 254); //Logo, titles, etc
        --font-secondary-color-dark: rgb(103, 103, 114); //Sidebar links
        --font-third-color-dark: rgb(106, 112, 127);   // New column text
        --border-color-dark: rgb(50, 51, 62);
        --shadow-color-dark:  rgb(36, 38, 49);

        /* Colors */

        --primary-color: rgb(102, 94, 197);
        --primary-color-hover: rgba(102, 94, 197, 0.8);

        --secondary-color: rgb(91, 192, 220);
        --secondary-color: rgba(91, 192, 220, 0.8);

        --third-color: rgb(121, 216, 183);
        --third-color-hover: rgba(121, 216, 183, 0.8);

        --error-color: rgb(240, 77, 77);

        --white-color: #fff;
        --radius: 5px;
        --transition: 0.3s ease;

        --radius-primary: 5px;
        --radius-secondary: 80px;
        
        /* Fonts */

        --fs-xs: 11px;
        --fs-s: 13px;
        --fs-m: 16px;
        --fs-l: 20px;
        --fs-xl: 30px;

    }

    /* Normalization styles */
     
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
        font-size: var(--fs-xs);
        background-color: ${({ theme }) => theme.backgroundPrimaryColor};
        color: ${({ theme }) => theme.fontPrimaryColor};
    }

    a {
        text-decoration: none;
        transition: var(--transition);
    }

    button,
    input,
    select,
    textarea {
        border: 1px solid transparent;
        outline: none;
        transition: var(--transition);
        font-size: var(--fs-xs);
    }

    button {
        cursor: pointer;
    }

`;