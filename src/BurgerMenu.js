import './BurgerMenu.css';
import React, { useState } from 'react';

export default function BurgerMenu() {
    // État pour suivre si le menu est ouvert ou fermé
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état du menu
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="button-menu" onClick={toggleMenu}></div>
            <nav className={`burger-menu ${isOpen ? 'visible' : 'hidden'}`}>
                <div className="button-close" onClick={toggleMenu}></div>
                <ul className="burger-menu-list">
                    <li className="bar">Présentation</li>
                    <li className="bar">Tarifs</li>
                    <li className="bar">Contact</li>
                </ul>
            </nav>
        </>
    );
}