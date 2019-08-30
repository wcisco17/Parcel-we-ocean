import { createGlobalStyle } from "styled-components";

export const theme = {
    colors: {
        primary: '#4285F4',
        shadow: '3px 4px 10px rgba(66, 133, 244, 0.69)',
        dark: '#3a3a3a',
        white: '#FFFFFF',
        danger: '#bb2124',
        btn: {
            primaryOrange: '#FA735C',
            primaryRed: '#EB12D8',
            primaryBlue: '#3b5998',
            primaryGreen: '#00c300',
        },
        grey: {
            normal: '#636363',
            default: 'rgba(0, 0, 0, 0.7)',
            light: 'rgba(0, 0, 0, 0.5)',
            ultraLight: 'rgba(0, 0, 0, 0.25)',
        },
    },
    fontFamily: {
        main: `'Montserrat', sans-serif;`,
    },
};

export interface CustomStylesProps {
    color?: string;
    withBoxShadow?: boolean;
    size?: string;
    padLeft?: string;
    padRight?: string;
}

export const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    
    *, html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  
    body {
        font-family: ${theme.fontFamily.main};
    }
    .swal-overlay {
         background-color: ${theme.colors.primary};
    }
    .swal-content {
        display: block;
    }
    .log {
            height: 500px;
            width: 1050px;
            border-radius: 20px;
    }
    .swal-modal {
        width: 630px;
        height: 690px;
    }
    .swal-text {
        font-size: 26px;
        height: 350px;
    }
    
    .swal-button {
        width: 150px;
        height: 60px;
        font-size: 20px;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        position: relative;
        top: -200px;
    }
    .swal-footer {
        display: flex;
        align-items: center;
        justify-content: center;
    }
  `;