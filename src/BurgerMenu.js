import './BurgerMenu.css';

export default function BurgerMenu() {
    return (
            <nav className="burger-menu">
                <div className="button-close"></div>
                <ul className="burger-menu-list">
                    <li className="bar">Présentation</li>
                    <li className="bar">Tarifs</li>
                    <li className="bar">Contact</li>
                </ul>
            </nav>
    );
}