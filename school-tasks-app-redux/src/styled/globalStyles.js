import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    

    /* Variables */
    :root {
        
        /* Colors */
        --background-primary-color: rgb(28,27,33);
        --background-secondary-color: rgb(41, 42, 47);
        --background-third-color: rgba(82,82,90,1.0);

        /* Status color */
        --pending-color: rgb(234, 145, 97);
        --proccess-color: rgb(97, 207, 234);
        --completed-color: rgb(120, 234, 97);

        /* Component colors */
        --primary-color: rgba(116,126,229,1.0);
        --primary-color-hover: rgba(76,89,196,1.0);
        --disabled-color: rgba(43, 42, 48, 0.4);

        /* Alert colors */
        --success-color: rgb(137, 222, 162);
        --error-color: rgba(238,126,148,1.0);
        --info-color: rgba(122,114,203,1.0);

        /* Font */
        --font: 'Inter', sans-serif;
        --fs-xs: 11px;
        --fs-s: 13px;
        --fs-m: 16px;
        --fs-l: 20px;
        --fs-xl: 25px;
        --font-primary-color: rgba(255,255,255,1.0);
        --font-secondary-color: rgba(74,73,81,1.0);
        --font-third-color:  rgba(79,79,89,1.0);

        /* Other variables */
        --transition: 0.3s ease;
        --radius: 3px;

    }

    /* Normalization styles */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background-primary-color);
        font-family: var(--font);
        font-size: var(--fs-m);
        color: var(--font-primary-color);
    }

    a {
        text-decoration: none;
        color: var(--font-primary-color);
        transition: var(--transition);
        border: 1px solid transparent;
        font-size: var(--fs-s);
    }

    button,
    input,
    select,
    textarea {
        outline: none;
        transition: var(--transition);
        border: 1px solid transparent;
        font-family: var(--font);
    }

    button {
        cursor: pointer;
    }

    .App {
        padding: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    /* Scrollbar */

    /* width */
    ::-webkit-scrollbar {
        width: 3px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--background-secondary-color);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--background-third-color);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    /* Animations */
    @keyframes fadeInDown {

        from {
            transform: translateY(-20px);
            opacity: 0;
            visibility: hidden;
        }

        to {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
    }

    @keyframes rotate {

        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }

    }

`;