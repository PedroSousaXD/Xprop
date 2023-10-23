import styles from './Challenges.module.css'


export function Challenges (){
  return (
    <div className={styles.content}>
      <div>
        Escolha seu Desafio
      </div>
      <div>
        <div>
          <input type="checkbox" id='ACOES'/>
          <label For="ACOES">AÇÕES</label>
        </div>
        <div>
          <input type="checkbox" id='FUTUROS'/>
          <label For="FUTUROS">FUTUROS</label>
        </div>
        <div>
          <input type="checkbox" id='FOREX'/>
          <label For="FOREX">FOREX</label>
        </div>
      </div>
      <div>
        <div>
          <div id='1' className={ [styles.visible, styles.notVisible] }>
            <input type="checkbox" id='ACOESX'/>
            <label For="ACOESX">Ações X</label>
          </div>
          <div>
            <input type="checkbox" id='ACOESEXTENDED'/>
            <label For="ACOESEXTENDED">Ações Extended</label>
          </div>
        </div>
      </div>
      <div className={styles.Products}>
        <div>
          
        </div>

      </div>

    </div>
  )
}