import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from 'react-router-dom';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link to='/' className="header__link">
                Main page
            </Link>
            <Link to='/cart-page/' className="header__link">
                Cart page
            </Link>
            <Link className="header__link" href="#">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};

export default AppHeader;