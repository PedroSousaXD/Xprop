
import Header from './components/header'
import XpropContent from './components/xprop'
import Challenges from './components/challenges'
import DashBoard from './components/dasboard'
import Scolpo from './components/scolpo'
import Footer from './components/footer'

import './global.css'

export function App () {
  return (
    <header>
      <Header/>
      <XpropContent/>
      <Challenges/>
      <DashBoard/>
      <Scolpo/>
      <Footer/>
    </header>
  )
  
}