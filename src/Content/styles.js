import styled from 'styled-components';
import { FaTemperatureLow } from 'react-icons/fa';
import { RiWindyLine } from 'react-icons/ri';
import { IoIosWater } from 'react-icons/io';
import { BsEye } from 'react-icons/bs';
import { TbGauge } from 'react-icons/tb';

export const TempIcon = styled(FaTemperatureLow)`
    margin-right: 5px;
`

export const WindIcon = styled(RiWindyLine)`
    font-size: 45px;
    margin-bottom: 0.25rem;
`

export const HumidityIcon = styled(IoIosWater)`
    font-size: 45px;
    margin-bottom: 0.25rem;
`

export const VisibilityIcon = styled(BsEye)`
    font-size: 45px;
    margin-bottom: 0.25rem;
`

export const PressureIcon = styled(TbGauge)`
    font-size: 45px;
    margin-bottom: 0.25rem;
`

export const CityName = styled.h1`
    margin: 1rem;
    font-size: 2.75rem;
    font-weight: 600;
`

export const CityTemp = styled.section`
    width: 500px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
`

export const CityTempFlex = styled.section`
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 5px;
`

export const Temp = styled.h2`
    margin: 5px;
    font-size: 4.8rem;
    font-weight: 100;
`

export const Desc = styled.p`
    margin: 0 0 20px 10px;
    font-size: 2rem;
`

export const Error = styled.p`
    margin: 45% 0;
    font-size: 2rem;
    color: #5e0b15;
    text-align: center;
    font-weight: 600;
`

export const MinMax = styled.p`
    font-size: 1.3rem;
    padding-top: 3px;
    margin: 10px;
`

export const Feels = styled.p`
    font-size: 1.3rem;
    margin: 10px;
`

export const WeatherHeader = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 1rem;
`

export const WeatherDetails = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
    margin: 1rem;
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 200px;
    height: 200px;
    background-color: ${({ isDay }) =>
        isDay
        ? "#7A93CD"
        : "#2A6F97"};
    padding: 2rem;
    margin: 1.1rem;
    border: ${({ isDay }) =>
        isDay
        ? "1px solid #7A93CD"
        : "1px solid #2A6F97"};
    box-shadow: ${({ isDay }) =>
        isDay
        ? "2px 4px 10px #899FD2, -2px -2px 10px #C1D3FE"
        : "2px 4px 10px #2A6F97, -2px -2px 10px #61A5C2"};
    border-radius: 25%;

    opacity: 0.8;
`

export const DetailsText = styled.p`
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
`

