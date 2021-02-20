import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    z-index: 999;
    display: fixed;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65px;
    background-color: #023d8d;
`

export const Name = styled.div`
    margin: 0 10px;

    span {
        color: #FFFFFF;
        font-family: 'Passion One', cursive;
        font-weight: bolder;
        font-size: 38px;
    }

    img {
        width: 32px;
        height: 30px;
        margin: 0 12px;
    }
`

export const Input = styled.div`
    margin: 0 60px;
`

export const Purchase = styled.div`
    margin: 0 30px;
    cursor: pointer;
`