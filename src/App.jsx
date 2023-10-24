import { Header } from './components/Header'
import { XpropContent } from './components/XpropContent'
import { Challenges } from './components/Challenges'
import { DashBoard } from './components/DashBoardArea'
import { Scolpo } from './components/scolpo'
import { Footer } from './components/Footer'

import './global.css'

export function App () {
  return (
    <header>
      <Header/>
      <XpropContent/>
      {/* <Challenges/> */}
      <DashBoard/>
      <Scolpo/>
      <Footer/>
    </header>
  )
  
}