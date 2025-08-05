import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import MainContent from './MainContent.jsx'
import Contador from './Contador.jsx'
import Tabela from './Tabela.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
<div className='site'>
    
    <Header/>
    <MainContent/>
    <Contador/>
    <Footer />
    <Tabela/>
</div>
  </StrictMode>

)
