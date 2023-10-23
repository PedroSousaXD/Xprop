import { Nav } from './components/Nav'
import { Header } from './components/Header'
import { XpropContent } from './components/XpropContent'
import { Challenges } from './components/Challenges'
import { DashBoard } from './components/DashBoardArea'

import './global.css'

export function App () {
  return (
    <header>
      <Nav/>
      <Header/>
      <XpropContent/>
      {/* <Challenges/> */}
      <DashBoard/>
    </header>
  )
  
}