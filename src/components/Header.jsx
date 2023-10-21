import styles from './Header.module.css'
import Xprop from "../assets/XpropBackground.svg"
import LogoXprop from "../assets/LogoXprop.svg"

export function Header() {
  return (
    <header className={styles.pageOne}>
      <div>        
        <nav className={styles.Nav}>
          <div className={styles.NavItens}>
            <img src={LogoXprop} className={styles.img} />
              <div className={styles.span}>
                <span>DESAFIO</span>
                <span>INSTITUCIONAL</span>
                <span>TREINAMENTO</span>
                <span>CONTATO</span>
              </div>
              <button className={styles.buttonNav}>LOGIN</button>
          </div>
        </nav>
        <div className={styles.content}>
          <h2>Seja Bem-vindo a</h2>
          <h1>XPROP Trading</h1>
          <h2>Conheça os nossos desafios</h2>
          <div>
            <span>
              Mercado de Futuros<button>ÍNDICE E DÓLAR</button>
            </span>
            <span>
              Mercados Forex<button>FOREX</button>
            </span>
            <span>
              Mercados de Ações -B3 <button>AÇÕES</button>
            </span>
          </div>
          <img src={Xprop} alt="" />
        </div>
      </div>
    </header>
  )
}