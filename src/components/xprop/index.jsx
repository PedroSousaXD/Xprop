import styles from './style.module.css'
import rendaFixaLogo from "../../assets/rendaFixaLogo.svg";
import fundoDeInvestimentoLogo from "../../assets/fundoDeInvestimentoLogo.svg";
import previdenciaPrivadaLogo from "../../assets/previdenciaPrivadaLogo.svg";
import rendaVariavelLogo from "../../assets/rendaVariavelLogo.svg";

export default function XpropContent (){
  return (
    <div className={styles.aside}>
      <aside>
        <div className={styles.infoXprop}>
          <span>Mais de 22.000 Traders</span>
          <span>conhecem a XPROP</span>        
          <p>Aqui trader você terá metas de crescimento, acompanhamento dos seus</p>
          <p>resultados através do nosso Dashboard.</p>
        </div>
        <div className={styles.content}>
          <div className={styles.contentBox}>
            <img src={rendaFixaLogo} alt="" />
            <h2>As maiores Contas pelo menor Preço</h2>
            <p>Vencemos a concorrência em qtde. de contas por um preço competitivo.</p>
            <a href=''>Saiba mais →</a>
          </div>
          <div className={styles.contentBox}>
            <img src={rendaVariavelLogo} alt="" />
            <h2>Mercado 24 horas</h2>
            <p>Nossa mesa proprietária tem os ativos que trabalham durante 24 horas por dia.</p>
            <a href=''>Saiba mais →</a>
          </div>
          <div className={styles.contentBox}>
            <img src={fundoDeInvestimentoLogo} alt="" />
            <h2>Maior Número de ativos</h2>
            <p>Trabalhamos com os ativos futuros e internacionais</p>
            <a href=''>Saiba mais →</a>
          </div>
          <div className={styles.contentBox}>
            <img src={previdenciaPrivadaLogo} alt="" />
            <h2>Tempo ilimitado para Aprovação</h2>
            <p>Tenha tempo ilimitado de aprovação, com os nossos desafios exclusivos.</p>
            <a href=''>Saiba mais →</a>
          </div>
        </div>
      </aside>
    </div>
  )
}