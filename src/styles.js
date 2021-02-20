import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

// ------------ STYLES FROM BANNER ---------------
export const Banner = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 65px;

    img {
        width: 50%;
        height: 300px;
    }
`

export const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #de8e85;
    width: 50%;
    height: 300px;

    img {
        position: absolute;
        width: 80px;
        height: 80px;
        opacity: .4;
        margin-left: 180px;
        margin-top: -60px;
    }
`

export const BannerTitle = styled.div`
    p {
        margin: 0;
        font-size: 30px;
        color: #FFFFFF;
        padding-left: 60px;
    }

    span {
        font-size: 36px;
        font-weight: bold;
        color: #FFFFFF;
        padding-left: 60px;
    }
`

export const BannerText = styled.div`
    width: 90%;

    p {
        margin: 8px 0;
        color: #FFFFFF;
        font-weight: bold;
        padding-left: 60px;
    }
`
// ----------------------------------

// ----------- STYLES FROM BUTTONS ----------
export const Buttons = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-bottom: 40px;
`

export const ButtonContent = styled.div`
    width: 390px;
    display: flex;
    justify-content: space-between;
`
// -------------------------------------

// ------------- STYLES FROM TEXT -----------
export const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const TextContent = styled.div`
    width: 80%;

    p {
        color: #B22222;
        font-weight: bold;
    }
`
// -----------------------------------------

// ---------- STYLES FROM CARDS -------------
export const CardsSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 35vh 35vh 22vh;
    grid-gap: 20px;
    padding: 0 120px;
    margin: 20px 0;
`

export const FirstCard = styled.div`
    background-color: #FFFFFF;
    padding: 0 15px;

    p {
        color: #B22222;
        font-weight: bold;
    }
`

export const SecondCard = styled.div`
    background-color: #FFFFFF;
    padding: 0 15px;

    p {
        color: #B22222;
        font-weight: bold;
    }
`

export const ImageCard = styled.div`
    grid-row: 1/3;
    grid-column: 2;

    div {
        height: 50px;
        background-color: #de8e85;
        color: #FFFFFF;
        padding-left: 20px;
        display: flex;
        align-items: center;
    }

    img {
        width: 100%;
        height: 90%;
    }
`

export const ThirdCard = styled.div`
    grid-column: 1/3;
    grid-row: 3/4;
    background-color: #FFFFFF;
    padding: 0 15px;

    p {
        color: #B22222;
        font-weight: bold;
    }
`
