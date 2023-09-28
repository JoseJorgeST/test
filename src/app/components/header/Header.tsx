import { Link, } from "react-router-dom"
import './Header.scss'

function Header() {

  return (
    <header>
        <div className="container_logo">
            <div className="img">
                <img src="/src/assets/img/logo.png" alt="Logo" />
            </div>
            <h1>Test</h1>
        </div>
        <div className="container_nav">
            <nav>
                <Link to="/" className="link">Menu</Link>
                <Link to="/receta" className="link" >Recetas</Link>
                <Link to="/compra" className="link" >Compras</Link>
            </nav>
        </div>
        <div className="social">
            <div className="container_social">
                <img src="/src/assets/img/facebook.png" alt="Facebook" />
                <img src="/src/assets/img/Instagram.png" alt="Instagram" />
                <img src="/src/assets/img/whatsapp.png" alt="Whatsapp" />
            </div>
        </div>
    </header>
  )
}

export  {Header}