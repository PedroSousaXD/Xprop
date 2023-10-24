import LogoXprop from "../assets/LogoXprop.svg"
import Xprop from "../assets/XpropBackground.svg"


import styles from './Header.module.css'


export function Header() {
  return (
    <header>
      <div className={styles.header}>      
        <nav className={styles.nav}>
          <img src={LogoXprop} className={styles.navImg} alt="" />
          <div className={styles.navItens}> 
            <a href="#">DESAFIO</a>
            <a href="#">INSTITUCIONAL</a>
            <a href="#">TREINAMENTO</a>
            <a href="#">CONTATO</a>
          </div>
          <div className={styles.buttonNav}>
            <button className={styles.buttonNav}>
              LOGIN
            </button>
          </div>
        </nav>      
      <div className={styles.xProp}>
        <span>
          Seja bem-vindo a
        </span>
        <h1>
          XPROP Trading
        </h1>
        <span>
          Conheça os nossos desafios
        </span>
      </div>
        <div className={styles.markets}>
          <span className={styles.products}>
            Mercados de Futuros
            <button>
              ÍNDICE E DÓLAR
            </button>
          </span>
          <span className={styles.products}>
            Mercados Forex
            <button>
              FOREX
            </button>
          </span>
          <span className={styles.products}>
            Mercados de Ações - B3
            <button>
              AÇÕES
            </button>
          </span>
        </div>
      </div>
    </header>
  )
}