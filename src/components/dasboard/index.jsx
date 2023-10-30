import style from './style.module.css'

import imgDash from '../../assets/ImgDashBoard.svg'

export default function DashBoard(){
  return (
    <header>
      <aside className={style.aside}>
        <div>
          <div className={style.firstText}>
            <p>Nosso Dashboard com</p>
            <p>resultados completos</p>
          </div>
          <div className={style.secondText}>
            <p>Seus resultados e pontuações das operações em um só lugar,</p>
            <p>com segurança e sigilo de informações</p>
          </div>
          <div className={style.imgDash}>
          <img src={imgDash} alt="" />
          </div>
        </div>      
      </aside>
      <div className={style.Footer}>
        <p>
          Não perca sua oportunidade de ser Trader
        </p>
        <button>
          QUERO SER TRADER DA XPROP
        </button>
      </div>
    </header>
  )
}