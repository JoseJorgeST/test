import './Home.scss'
import { Header } from '../../components/header/Header';
import { MenuSemanal } from '../../components/menuSemanal/MenuSemanal';


function Home() {
  return (
    <>
      <div className="containers">
        <div className="container">
          <div className="container_header">
              <Header />
          </div>
          <div className="container_main">
            <MenuSemanal />
          </div>
        </div>
      </div>    
    </>
  )
}

export {Home}
