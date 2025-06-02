import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
import MainContent from './MainContent.jsx'

createRoot(document.getElementById('root')).render(

<div className='site'>
  <StrictMode>
    <Header/>
    <MainContent/>
    <Footer />
  </StrictMode>
</div>

)
