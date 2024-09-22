import './styles.css'

function Navigation(){
    return(
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <a href="/" className="navigation__link">Início</a>
                </li>
                <li className="navigation__item">
                    <a href="/sobre" className="navigation__link">Sobre</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation