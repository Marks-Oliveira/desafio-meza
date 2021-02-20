import React from 'react';

import * as S from './styles';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import mais from '../../assets/Mais.png';

const Header = () => {
    return(
        <S.Wrapper>
            <S.Name>
                <span><i>PanVel</i></span>
                <img src={mais} alt="Logo" />
            </S.Name>
            <div>
                <Button 
                    style={{
                        backgroundColor: '#023d8d', 
                        color: '#FFFFFF',
                        fontSize: '12px'
                    }}
                    variant="contained"
                    startIcon={<MenuIcon style={{color: '#FFFFFF'}} />}
                >
                    Categorias
                </Button>
            </div>
            <S.Input>
                <Paper component="form">
                    <InputBase 
                        style={{
                            width: '400px',
                            padding: '0 20px'
                        }}
                        placeholder="O que você procura?"
                    />
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </S.Input>
            <div>
                <Button 
                    style={{
                        backgroundColor: '#023d8d', 
                        color: '#FFFFFF',
                        fontSize: '12px'
                    }}
                    variant="contained"
                    startIcon={<AccountCircleIcon style={{color: '#FFFFFF'}} />}
                    >
                        Entrar
                </Button>
            </div>
            <S.Purchase>
                <ShoppingBasketIcon style={{color: '#00BFFF'}}/>
            </S.Purchase>
        </S.Wrapper>
    );
}

export default Header;