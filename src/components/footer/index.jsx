import {FacebookLogo} from 'phosphor-react'
import {InstagramLogo} from 'phosphor-react'
import {TwitterLogo} from 'phosphor-react'
import {LinkedinLogo} from 'phosphor-react'
import {YoutubeLogo} from 'phosphor-react'

import LogoFooter from '../../assets/LogoFooter.svg'

import style from './style.module.css'

export default function Footer() {
  return(
    <footer >
      <div className={style.footer}>
        <div className={style.LogoFotter}>
          <img src={LogoFooter} alt="" />
          <p>Posuere ac in in nisl sed augue. Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed augue.</p>
        </div>
        <div className={style.Links}>
          <div className={style.LinksFooter}>
            <h3>Sobre Nós</h3>
            <a href="">SOBRE NÓS</a>
            <a href="">NEWSLETTER</a>
          </div>
          <div className={style.LinksFooter}>
            <h3>Desafios</h3>
            <a href="">MERCADO FUTURO</a>
            <a href="">MERCADO DE AÇÓES</a>
            <a href="">MERCADO DE FOREX</a>
          </div>
          <div className={style.LinksFooter}>
            <h3>Support</h3>
            <a href="">FAQS</a>
            <a href="">CONTATO</a>
          </div>
          <div className={style.Social}>
            <h3>Social</h3>          
            <a href=""><FacebookLogo size={40}/></a>
            <a href=""><InstagramLogo size={40}/></a>
            <a href=""><TwitterLogo size={40}/></a>
            <a href=""><LinkedinLogo size={40}/></a>
            <a href=""><YoutubeLogo size={40}/></a>
          </div>
        </div>      
      </div>
      <div className={style.Final}>
        <p>© 2023Todos os Direitos Reservados by XProp Trading</p>
      </div>
    </footer>
  )
}