import TraderExample from '../../assets/TraderExample.svg'

import style from './style.module.css'

export default function Scolpo (){
  return (
    <aside>
      <div className={style.content}>
        <img src={TraderExample} alt="" />
        <div className={style.abaut}>
          <h3>Quem é a Xprop Trading?</h3>
          <p>A X Prop é uma mesa proprietária criada em 2020, com o objetivo de selecionar traders para operar nosso capital. Os traders podem continuar em suas profissões, operar em home office, ou ainda trabalhar em nossa sede. Nossas exigências para entrar e continuar em nosso time são operar uma quantidade mínima de dias e ter resultados consistentes.</p>
        </div>
      </div>
      <div className={style.divider}></div>
      <div className={style.Newsletter}>
        <h3>
          Newsletter
        </h3>
        <p>
          Digite seu endereço de e-mail para obter as últimas novidades da X Prop, eventos especiais e atividades entregues diretamente na sua caixa de entrada.
        </p>        
        <form action="/action_page.php">
          <div className={style.form}>
            <input type="email" name="" id="end" placeholder='Seu melhor email' />
            <button id="end" type="submit" href="#">Se increva</button>
          </div>
        </form>        
      </div>
        <div className={style.trader}>
          <h3>Seja um(a) Trader Profissional</h3>
          <p>A X Prop é uma mesa proprietária criada em 2020, com o objetivo de selecionar traders para operar nosso capital. Os traders podem continuar em suas profissões, operar em home office, ou ainda trabalhar em nossa sede. Nossas exigências para entrar e continuar em nosso time são operar uma quantidade mínima de dias e ter resultados consistentes.</p>
          <button>QUERO CONHECER OS DESAFIOS XPROP</button>
        </div>
    </aside>
  )
}