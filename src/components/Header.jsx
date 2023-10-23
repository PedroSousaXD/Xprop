import styles from './Header.module.css'


export function Header() {
  return (
    <header>
      <div className={styles.header}>
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