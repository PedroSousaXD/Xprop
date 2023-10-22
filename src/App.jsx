import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { XpropContent } from './components/XpropContent'

import './global.css'

export function App () {
  return (
    <header>
      <Nav/>
      <Header/>
      <XpropContent/>
    </header>
  )
  
}