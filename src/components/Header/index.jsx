import './styles.css'
import Navigation from '../Navigation'

function Header() {

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__content">
                        <h1 className="header__title">App Previsão do Tempo Dev</h1>
                        <Navigation />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header