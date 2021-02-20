import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import * as S from './styles';
import Button from '@material-ui/core/Button';
import AppsIcon from '@material-ui/icons/Apps';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import banner from './assets/Banner1.jpg';
import cabelo from './assets/cabelo-feminino.png';
import cortes from './assets/cortes-feminino.jpg';

function App() {
  return (
    <S.Wrapper>
        <Header />
        <S.Banner>
            <img src={banner} alt='Banner' />
            <S.BannerContent>
                <img src={cabelo} alt='Cabelo' />
                <S.BannerTitle>
                    <p>CAPILAR</p> 
                    <span>FORTALECIMENTO</span>
                </S.BannerTitle>
                <S.BannerText>
                    <p>Com suas fórmulas especiais, os shampoos dermocosméticos ajudam a 
                       fortalecer o cabelo, combater a queda e tratar a tão indesejada caspa.
                    </p>
                </S.BannerText>
            </S.BannerContent>
        </S.Banner>
        <S.Buttons>
            <S.ButtonContent>
                <Button 
                    style={{
                        width: '190px',
                        backgroundColor: '#FFFFFF',
                        fontSize: '11px'
                    }}
                    variant="contained"
                    startIcon={<AppsIcon />}
                >
                    Quantidade
                </Button>
                <Button 
                    style={{
                        width: '190px',
                        backgroundColor: '#FFFFFF',
                        fontSize: '11px'
                    }}
                    variant="contained"
                    startIcon={<CompareArrowsIcon />}
                >
                    Ordenar
                </Button>
            </S.ButtonContent>
        </S.Buttons>
        <S.Text>
            <S.TextContent>
                <p>SHAMPOOS E DERMOCOSMÉTICOS</p>
                <span><strong>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</strong></span>
            </S.TextContent>
        </S.Text>
        <S.CardsSection>
            <S.FirstCard>
                <p>COMO ESCOLHER O MELHOR SHAMPOO</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum.</span>
            </S.FirstCard>
            <S.SecondCard>
                <p>QUEDA DE CABELO NUNCA MAIS</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum.</span>
            </S.SecondCard>
            <S.ImageCard>
                <div>
                    <span>CONHEÇA NOSSOS <strong>SHAMPOOS</strong></span>
                    <ArrowRightIcon />
                </div>
                <img src={cortes} alt="Cortes" />
            </S.ImageCard>
            <S.ThirdCard>
                <p>ANTICASPA</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                      deserunt mollit anim id est laborum.</span>
            </S.ThirdCard>
        </S.CardsSection>
        <Footer />
    </S.Wrapper>
  );
}

export default App;
