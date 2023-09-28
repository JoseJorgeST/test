import { ComprasMenu } from '../../components/comprasMenu/ComprasMenu';
import { Header } from '../../components/header/Header'
import './Compra.scss'

function Compra() {
  return (
    <>
      <div className="containers">
        <div className="container">
          <div className="container_header">
            <Header />
          </div>
          <div className="container_main">
            <ComprasMenu/>
          </div>
        </div>
      </div>
    </>

  )

}

export { Compra }