import React, { Component } from 'react';
import Head from 'next/head'

export default function GeneralHead(props) {

    return (
        <header id='header'>
                    <div className="header__content">
            <div className="header__logo">
                <a className="header__nav-link" href="https://www.bancolombia.com/personas?_ga=2.77780628.1433964745.1655747318-384826525.1655313686">
                    <em className="bc-icon bc-md" aria-hidden="true" aria-label="prueba"
                        role="img">bancolombia-horizontal</em>
                </a>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-ul">
                    <li className="header__nav-li" data-scroll="banner"><a className="header__nav-link">Inicio</a></li>
                    <li className="header__nav-li" data-scroll="pasoapaso"><a className="header__nav-link">¿Cómo descargar?</a></li>
                    <li className="header__nav-li" data-scroll="beneficios"><a className="header__nav-link">Beneficios</a></li>
                    <li className="header__nav-li" data-scroll="TabsGeneral"><a className="header__nav-link">Tasas y tarifas</a></li>
                </ul>
            </nav>
            <div className="header__button">
                <button className="button-primary" id="btn-open-modal-header" data-toggle="modal" data-target="#modalApp">Descargar App</button>
                <div className="header__icon-menu">
                    <label> Menú</label>
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.08929 0.127011L0.374397 0.842339C0.205198 1.01165 0.205198 1.28618 0.374397 1.45552L6.89896 8L0.374397 14.5445C0.205198 14.7138 0.205198 14.9883 0.374397 15.1577L1.08929 15.873C1.25849 16.0423 1.53283 16.0423 1.70207 15.873L9.26346 8.30661C9.43265 8.13729 9.43265 7.86277 9.26346 7.69342L1.70207 0.127011C1.53283 -0.0423369 1.25849 -0.0423369 1.08929 0.127011Z" fill="#454648"></path>
                        <path d="M1.08929 0.127011L0.374397 0.842339C0.205198 1.01165 0.205198 1.28618 0.374397 1.45552L6.89896 8L0.374397 14.5445C0.205198 14.7138 0.205198 14.9883 0.374397 15.1577L1.08929 15.873C1.25849 16.0423 1.53283 16.0423 1.70207 15.873L9.26346 8.30661C9.43265 8.13729 9.43265 7.86277 9.26346 7.69342L1.70207 0.127011C1.53283 -0.0423369 1.25849 -0.0423369 1.08929 0.127011Z" fill="#454648"></path>
                    </svg>
                </div>
            </div>
        </div>
        </header>
    );

}
