import { Header } from '../../components/header/Header';
import RecetasMenu from '../../components/recetasMenu/RecetasMenu';
import './Receta.scss'

function Receta() {
  return (
    <>
      <div className="containers">
        <div className="container">
          <div className="container_header">
              <Header />
          </div>
          <div className="container_main">
              <RecetasMenu />
          </div>
        </div>
      </div>    
    </>
  )
}

export {Receta}