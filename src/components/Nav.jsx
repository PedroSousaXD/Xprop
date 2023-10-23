import LogoXprop from "../assets/LogoXprop.svg"
import Xprop from "../assets/XpropBackground.svg"

import styles from './Nav.module.css'

export function Nav() {
  return(
      
    <header>
      <div className={styles.navBar}>
        <nav className={styles.nav}>
          <div className={styles.navItens}>
            <div className={styles.navImg}>
              <img src={LogoXprop} alt="" />
            </div>
            <div className={styles.navLinks}>
              <a href="#">DESAFIO</a>
              <a href="#">INSTITUCIONAL</a>
              <a href="#">TREINAMENTO</a>
              <a href="#">CONTATO</a>
            </div>
            <div className={styles.buttonNav}>
              <button>
                LOGIN
              </button>
            </div>

          </div>
        </nav>
      </div>
      
    </header>

  )
}