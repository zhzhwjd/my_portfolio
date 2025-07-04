import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Header from './header.jsx'
import MyInfo from './myInfo.jsx'
import About from './about.jsx'
import Career from './career.jsx'
import PortfolioAndSkill from './portfolio.jsx'
import Footer from './footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <div className="w-full min-h-screen bg-yellow-100 overflow-x-hidden">
      <div className="flex flex-col ">
        <MyInfo />
        <About />
        <Career />
        <PortfolioAndSkill />
        <Footer />
      </div>
    </div>
  </StrictMode>,


)
