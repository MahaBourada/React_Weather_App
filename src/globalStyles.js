import styled, { createGlobalStyle } from "styled-components";
import WeatherDay from './Images/WeatherDay.jpg';
import WeatherNight from './Images/WeatherNight.jpg';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        font-family: 'Bitter', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        background-color: #efefef;
    }

    #root { /* To avoid the main body to expand however it wants */
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }  

    header {
        min-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    main {
        min-width: 100%;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 575px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #333;
    box-shadow: 0px 0px 15px gray;
    background-image: ${({ isDay }) =>
        isDay
        ? `url(${WeatherDay})`
        : `url(${WeatherNight})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: bottom;
    background-color: #415D43;
    color: #001233;
`