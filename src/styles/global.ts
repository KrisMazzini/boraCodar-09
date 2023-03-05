import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        min-height: 100vh;
        padding: 2rem;

        display: flex;
        flex-direction: column;
        justify-content: center;

        background-color: ${(props) => props.theme['bg-color']};
    }

    body, input {
        font-family: 'Inter', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.4rem;
    }

    div#root {
        
    }
`
