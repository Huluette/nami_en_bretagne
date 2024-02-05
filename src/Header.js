import './Header.css';
import React from 'react';
import Menu from './Menu';

export default function Header() {
    return (
        <header className="header">
            <Menu/>
            <div className="logo"></div>
            <div className="contact_header">
                <a className="tel_header" href="#">06 06 XX XX XX</a>
                <a className="mail_header" href="#">namienbretagne@gmail.com</a>
            </div>
        </header>
    )
}