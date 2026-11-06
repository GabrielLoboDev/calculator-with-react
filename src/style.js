import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Content = styled.div `
    width: 20%;
    height: auto;
    background-color: #FFFFFF;
    border: 1px solid purple;
`

export const Row = styled.div `
    width: 100%;
    heigth: 25%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const Column = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-itemns: center;
`