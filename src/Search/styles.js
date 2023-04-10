import styled from "styled-components";
import { BiSearchAlt, BiHome } from 'react-icons/bi';

export const SearchIcon = styled(BiSearchAlt)`
    font-size: 2.5rem;
    color: #001233;
`

export const HomeIcon = styled(BiHome)`
    font-size: 2.5rem;
    color: #001233;
`

export const ButtonSearch = styled.button`
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    border-right: 1px solid #00406C;
    border-bottom: 1px solid #00406C;
    border-radius: 15px; 
    margin-left: 15px;
    width: 18%;
    height: 70px;
    cursor: pointer;

    &:active {
        transform: translateY(1.25px);
    }
`

export const ButtonHome = styled.button`
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    border-left: 1px solid #00406C;
    border-bottom: 1px solid #00406C;
    border-radius: 15px; 
    margin-left: 20px;
    width: 8vh;
    height: 70px;
    cursor: pointer;

    &:active {
        transform: translateY(1.25px);
    }
`

export const FormSearch = styled.form`
    padding: 25px 25px 25px 15px;
    display: flex;
    flex-grow: 1;
`

export const FormHome = styled.form`
    display: flex;
    flex-grow: 1;
`

export const Label = styled.label`
    position: absolute;
    left: -99999px;
`

export const Input = styled.input`
    color: #001233;
    font-family: 'Bitter', sans-serif;
    width: 80%;
    height: 70px;
    padding: 15px;
    font-size: 2.5rem;
    border: none;
    background-color: rgba(255, 255, 255, 0.2);
    border-left: 1px solid #00406C;
    border-bottom: 1px solid #00406C;
    border-right: 1px solid #00406C;
    border-radius: 15px; 
    font-weight: 400; 

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #384356;
    }
`
