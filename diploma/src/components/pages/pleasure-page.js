import React from 'react';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import {Banner} from '../banners';
import GoodList from '../list/pleasure-list';

const PleasurePage = () => {
  return (
    <>
      <AppHeader/>
      <Banner classStyle={'banner banner-pleasure'} title={'For your pleasure'}/>
      <section className="shop">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-2">
              <img className="shop__girl" src="img/cup_of_coffee.jpg" alt="girl"/>
            </div>
            <div className="col-lg-4">
              <div className="title">About our beans</div>
              <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"/>
              <div className="shop__text">
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                <br/><br/>
                Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                so questions. <br/>
                As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                is song that held help face.
              </div>
            </div>
        </div>
        <div className="line"></div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="shop__wrapper">
              <GoodList/>
            </div>
          </div>
        </div>
        </div>
      </section>
      <AppFooter/>
    </>
  )
}

export default PleasurePage;
