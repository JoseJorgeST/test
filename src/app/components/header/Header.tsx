import { Link, } from "react-router-dom"
import './Header.scss'
import { useState } from "react";

function Header() {
    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
    };
    return (
        <header>
            <button onClick={toggleContent} className="toggle-button">
                {showContent ? '✕' : '☰'}
            </button>
            <div className="content-container">
                    <div className="container-logo-1">
                        <div className="img">
                            <img src="/src/assets/img/logo.png" alt="Logo" />
                        </div>
                        <h1>Test</h1>
                    </div>
                    <div className="container_nav_1">
                        <nav>
                            <Link to="/" className="link">
                                Menu
                            </Link>
                            <Link to="/receta" className="link">
                                Recetas
                            </Link>
                            <Link to="/compra" className="link">
                                Compras
                            </Link>
                        </nav>
                    </div>
                    <div className="social_1">
                        <div className="container_social">
                            <img src="/src/assets/img/facebook.png" alt="Facebook" />
                            <img src="/src/assets/img/Instagram.png" alt="Instagram" />
                            <img src="/src/assets/img/whatsapp.png" alt="Whatsapp" />
                        </div>
                    </div>
                </div>

            {showContent && (
                <div className="content-container">
                    <div className="container-logo-2">
                        <div className="img">
                            <img src="/src/assets/img/logo.png" alt="Logo" />
                        </div>
                        <h1>Test</h1>
                    </div>
                    <div className="container_nav_2">
                        <nav>
                            <Link to="/" className="link">
                                Menu
                            </Link>
                            <Link to="/receta" className="link">
                                Recetas
                            </Link>
                            <Link to="/compra" className="link">
                                Compras
                            </Link>
                        </nav>
                    </div>
                    <div className="social_2">
                        <div className="container_social">
                            <img src="/src/assets/img/facebook.png" alt="Facebook" />
                            <img src="/src/assets/img/Instagram.png" alt="Instagram" />
                            <img src="/src/assets/img/whatsapp.png" alt="Whatsapp" />
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export { Header }